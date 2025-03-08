from rest_framework import status
from rest_framework.response import Response
from django_ratelimit.decorators import ratelimit
from django.utils.decorators import method_decorator
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken,  UntypedToken
from django.contrib.auth import authenticate
from .serializers import LoginSerializer
from rest_framework_simplejwt.exceptions import TokenError
from rest_framework.exceptions import AuthenticationFailed

class BasicAuthView(APIView):
    permission_classes = [AllowAny]

    @method_decorator(ratelimit(key='ip', rate='5/m', method='POST'))
    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data)
        if not serializer.is_valid():
            return Response({'error': 'Invalid input'}, status=status.HTTP_400_BAD_REQUEST)

        email = serializer.validated_data['email']
        password = serializer.validated_data['password']

        user = authenticate(email=email, password=password)
        if not user:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

        if not user.is_active:
                return Response({'error': 'User account is inactive'}, status=status.HTTP_403_FORBIDDEN)


        refresh = RefreshToken.for_user(user)
        return Response({
            'access': str(refresh.access_token),
            'refresh': str(refresh),
            'user_id': user.uid,  
        }, status=status.HTTP_200_OK)

class AdminAuthView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(email=email, password=password)
        
        if not user:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

        if not user.is_active:
                return Response({'error': 'User account is inactive'}, status=status.HTTP_403_FORBIDDEN)

        if not user.is_staff_business:
            return Response({'error': 'Invalid credentials or not an admin'}, status=status.HTTP_401_UNAUTHORIZED)
        
        refresh = RefreshToken.for_user(user)
        return Response({
            'access': str(refresh.access_token),
            'refresh': str(refresh),
            'user_id': user.uid,
        })
    
class CustomTokenRefreshView(APIView):
    permission_classes = [AllowAny]  

    def post(self, request, *args, **kwargs):
        refresh_token = request.data.get('refresh')

        if not refresh_token:
            return Response({'error': 'Refresh token is required'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Verifica y decodifica el refresh token
            refresh = RefreshToken(refresh_token)
            
            # Genera un nuevo access token
            access_token = str(refresh.access_token)
            # Generar nuevo refresh token
            new_refresh_token = str(refresh)

            return Response({
                'access': access_token,
                'refresh': new_refresh_token, 
            }, status=status.HTTP_200_OK)

        except TokenError as e:
            return Response({'error': 'Invalid or expired refresh token. Please log in again.'}, status=status.HTTP_401_UNAUTHORIZED)

class CustomJWTVerifyView(APIView):
    permission_classes = [AllowAny]  # Permite acceso sin autenticación

    def post(self, request):
        token = request.data.get("token")  # Obtiene el token del body
        if not token:
            return Response({"error": "Token is required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Intenta decodificar el token sin importar su tipo (access o refresh)
            UntypedToken(token)
            return Response({"message": "Token is valid"}, status=status.HTTP_200_OK)
        except Exception as e:
            raise AuthenticationFailed("Invalid token")  # Si falla, el token no es válido
        
class LogoutView(APIView):
    permission_classes = [IsAuthenticated]
    
    def post(self, request):
        try:
            refresh_token = request.data.get('refresh')
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response({"error": str(e) },status=status.HTTP_400_BAD_REQUEST)