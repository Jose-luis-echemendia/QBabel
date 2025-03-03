from rest_framework import status, viewsets
from rest_framework.decorators import action
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import UserSerializer
from .permisions import IsAdminRole

User = get_user_model()

class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny, IsAuthenticated]
    
    def get_permissions(self):
        permissions = []
        
        if self.action == "create":
            permissions.append(AllowAny())
            return permissions
        
        return super().get_permissions()
    
    
    def perform_create(self, serializer):
        serializer.save()
        
    def perform_update(self, serializer):
        return serializer.save()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED
        )
        
    def update(self, request, *args, **kwargs):
        request_data = request.data.copy()
        partial = kwargs.pop("partial", False)
        instance = self.get_object()
        self.validate(request_data)          
        serializer = self.get_serializer(instance, data=request_data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        return Response(
            serializer.data, status=status.HTTP_200_OK,
        )

    def destroy(self, request, *args, **kwargs):
        instance_user = self.get_object()

        if instance_user.is_active:
            return Response(
                {"detail": "This user can not delete becouse he is active."},
                status=status.HTTP_400_BAD_REQUEST,
            )
            
        instance_user.delete()

        return Response(
            {"message": "user account deleted successfully"},
            status=status.HTTP_204_NO_CONTENT,
        )
        
    @action(detail=True, methods=["GET"])
    def get_authenticated_user(self, request, *args, **kwargs):
        user = request.user
        serializer = self.get_serializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(detail=True, methods=["POST"])
    def active(self, request, pk=None, *args, **kwargs):
        instance_user = self.get_object()

        if instance_user.is_active:
            return Response(
                {"detail": "This user is already active."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        instance_user.is_active = True
        instance_user.save()
        return Response(
            {"message": "user account activate successfully"},
            status=status.HTTP_204_NO_CONTENT,
        )

    @action(detail=True, methods=["POST"])
    def desactive(self, request, pk=None, *args, **kwargs):
        instance_user = self.get_object()

        if not instance_user.is_active:
            return Response(
                {"detail": "This user is already inactive."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        instance_user.is_active = False
        instance_user.save()
        return Response(
            {"message": "user account desactive successfully"},
            status=status.HTTP_204_NO_CONTENT,
        )