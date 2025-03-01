from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Category
from .serializers import CategorySerializer

class CustomCategoryViewSet:
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny, IsAuthenticated]
    
    def perform_create(self, serializer):
        serializer.save()
        
    def perform_update(self, serializer):
        return serializer.save()

    def create(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            return Response(
                {"detail": "Only superusers can create users."},
                status=status.HTTP_403_FORBIDDEN,
            )

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED, headers=headers
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
