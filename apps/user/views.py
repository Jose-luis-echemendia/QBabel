from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import IsAuthenticated, AllowAny
from apps.utils.views.abstract_views import BaseCustomAPIView
from django.contrib.auth import get_user_model
from .serializers import UserCreateSerializer, UserListSerializer
from .permisions import IsAdminRole, IsAccountOwner
from .mixins import ValidateRegisterUser
from .filters import UserFilter

User = get_user_model()


class RegisterUserView(BaseCustomAPIView, ValidateRegisterUser):
    queryset = User.objects.all()
    serializer_class = UserCreateSerializer
    permission_classes = [AllowAny]

    class Meta:
        model = User
        verbose_name = "user"
        verbose_name_plural = "users"

    def get_model(self):
        return self.Meta.model

    def validate(self, request_data):

        return self.validate_data(request_data)

    def post(self, request, *args, **kwargs):

        try:
            validated_data = self.validate(request.data)
        except ValidationError as e:
            return Response({"error": e.detail}, status=status.HTTP_400_BAD_REQUEST)

        serializer = self.get_serializer(data=validated_data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"user": serializer.data}, status=status.HTTP_201_CREATED)


class ListUserView(BaseCustomAPIView):
    queryset = User.objects.all()
    serializer_class = UserListSerializer
    filterset_class = UserFilter
    permission_classes = [IsAuthenticated, IsAdminRole]

    class Meta:
        model = User
        verbose_name = "user"
        verbose_name_plural = "users"

    def get_model(self):
        return self.Meta.model

    def get(self, request, *args, **kwargs):
        return self.get_objects(request, *args, **kwargs)


class GetAuthenticatedUserView(BaseCustomAPIView):
    queryset = User.objects.all()
    serializer_class = UserListSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        user = request.user
        serializer = self.get_serializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)


class DeleteUserView(BaseCustomAPIView):
    queryset = User.objects.all()
    serializer_class = UserListSerializer
    permission_classes = [IsAuthenticated, IsAccountOwner]

    def delete(self, request, *args, **kwargs):
        return self.desactive_object(request, *args, **kwargs)
