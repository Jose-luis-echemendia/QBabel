from rest_framework import status
from rest_framework.response import Response
from django_ratelimit.decorators import ratelimit
from django.utils.decorators import method_decorator
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from .serializers import LoginSerializer
from rest_framework_simplejwt.exceptions import TokenError

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
            return Response({'error': 'User not found or incorrect password'}, status=status.HTTP_401_UNAUTHORIZED)

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
        if user and user.is_staff:
            refresh = RefreshToken.for_user(user)
            return Response({
                'access': str(refresh.access_token),
                'refresh': str(refresh),
                'user_id': user.uid,
            })
        return Response({'error': 'Invalid credentials or not an admin'}, status=401)
    
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

class LogoutView(APIView):
    def post(self, request):
        try:
            refresh_token = request.data['refresh_token']
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=204)
        except Exception as e:
            return Response(status=400)