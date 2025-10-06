from django.utils import timezone
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken, UntypedToken
from rest_framework_simplejwt.exceptions import TokenError
from rest_framework.exceptions import AuthenticationFailed
from rest_framework import status
from rest_framework.response import Response
from django_ratelimit.decorators import ratelimit
from django.utils.decorators import method_decorator
from django.contrib.auth import authenticate
from apps.utils.views.abstract_views import BaseCustomAPIView
from django.contrib.auth import get_user_model
from uuid import UUID
from .serializers import LoginSerializer
from .models import ActivationToken

User = get_user_model()


class AccountActivationView(BaseCustomAPIView):
    permission_classes = [AllowAny]

    def get_model(self):
        return None

    def post(self, request, uid, token, *args, **kwargs):
        # Obtener el código del body de la petición
        code = request.data.get("code")

        if not code:
            return Response(
                {"error": "Invalid activation. The code is required"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            # Validar que el token sea un UUID válido
            token_uuid = UUID(token)
        except ValueError:
            return Response(
                {"error": "Invalid activation token format"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            # Buscar todo en una sola consulta optimizada
            activation_token = ActivationToken.objects.select_related("user").get(
                token=token_uuid,
                code=code,
                user__uid=uid,
                used=False,
                created_at__gte=timezone.now()
                - timezone.timedelta(days=1),  # Tokens expiran en 1 día
            )
        except ActivationToken.DoesNotExist:
            return Response(
                {"error": "Invalid activation token, code or user"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Verificar si el usuario ya está activo
        if activation_token.user.is_active:
            return Response(
                {"error": "Account is already active"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Activar la cuenta del usuario
        user = activation_token.user
        user.is_active = True
        user.save()

        # Marcar el token como usado
        activation_token.used = True
        activation_token.save()

        refresh = RefreshToken.for_user(user)
        return Response(
            {
                "access": str(refresh.access_token),
                "refresh": str(refresh),
                "user_id": user.uid,
            },
            status=status.HTTP_200_OK,
        )


class BasicAuthView(BaseCustomAPIView):
    permission_classes = [AllowAny]

    def get_model(self):
        return None

    @method_decorator(ratelimit(key="ip", rate="5/m", method="POST"))
    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data["email"]
        password = serializer.validated_data["password"]

        user = authenticate(email=email, password=password)
        if not user:
            return Response(
                {"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED
            )

        if not user.is_active:
            return Response(
                {"error": "User account is inactive"}, status=status.HTTP_403_FORBIDDEN
            )

        refresh = RefreshToken.for_user(user)
        return Response(
            {
                "access": str(refresh.access_token),
                "refresh": str(refresh),
                "user_id": user.uid,
            },
            status=status.HTTP_200_OK,
        )


class AdminAuthView(BaseCustomAPIView):
    permission_classes = [AllowAny]

    def get_model(self):
        return None

    def post(self, request, *args, **kwargs):
        email = request.data.get("email")
        password = request.data.get("password")

        user = authenticate(email=email, password=password)

        if not user:
            return Response(
                {"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED
            )

        if not user.is_active:
            return Response(
                {"error": "User account is inactive"}, status=status.HTTP_403_FORBIDDEN
            )

        if not user.is_admin:
            return Response(
                {"error": "Invalid credentials or not an admin"},
                status=status.HTTP_401_UNAUTHORIZED,
            )

        refresh = RefreshToken.for_user(user)
        return Response(
            {
                "access": str(refresh.access_token),
                "refresh": str(refresh),
                "user_id": user.uid,
            }
        )


class CustomTokenRefreshView(BaseCustomAPIView):
    permission_classes = [AllowAny]

    def get_model(self):
        return None

    def post(self, request, *args, **kwargs):
        refresh_token = request.data.get("refresh")

        if not refresh_token:
            return Response(
                {"error": "Refresh token is required"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            # Verifica y decodifica el refresh token
            refresh = RefreshToken(refresh_token)

            # Genera un nuevo access token
            access_token = str(refresh.access_token)
            # Generar nuevo refresh token
            new_refresh_token = str(refresh)

            return Response(
                {
                    "access": access_token,
                    "refresh": new_refresh_token,
                },
                status=status.HTTP_200_OK,
            )

        except TokenError as e:
            return Response(
                {"error": "Invalid or expired refresh token. Please log in again."},
                status=status.HTTP_401_UNAUTHORIZED,
            )


class CustomJWTVerifyView(BaseCustomAPIView):
    permission_classes = [AllowAny]  # Permite acceso sin autenticación

    def get_model(self):
        return None

    def post(self, request):
        token = request.data.get("token")  # Obtiene el token del body
        if not token:
            return Response(
                {"error": "Token is required"}, status=status.HTTP_400_BAD_REQUEST
            )

        try:
            # Intenta decodificar el token sin importar su tipo (access o refresh)
            UntypedToken(token)
            return Response({"message": "Token is valid"}, status=status.HTTP_200_OK)
        except Exception as e:
            raise AuthenticationFailed(
                "Invalid token"
            )  # Si falla, el token no es válido


class LogoutView(BaseCustomAPIView):
    permission_classes = [IsAuthenticated]

    def get_model(self):
        return None

    def post(self, request):
        try:
            refresh_token = request.data.get("refresh")
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
