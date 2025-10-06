from .serializers import ProfileSerializer, FollowerSerializer
from .models import Profile, Follower
from .filters import ProfileFilter
from .permissions import IsProfileAccountOwner
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.parsers import MultiPartParser, FormParser
from django_filters.rest_framework import DjangoFilterBackend
from django.db import transaction
from apps.utils.views.abstract_views import BaseCustomAPIView, BaseAPIView
from apps.utils.mixins import CreateImageMixin


class GetProfilesView(BaseCustomAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [AllowAny]
    filter_backends = [DjangoFilterBackend]
    filterset_class = ProfileFilter
    ordering_fields = ["created_at"]
    ordering = ["created_at"]

    class Meta:
        model = Profile
        verbose_name = "profile"
        verbose_name_plural = "profiles"

    def get_model(self):
        return self.Meta.model

    def get(self, request, *args, **kwargs):
        return self.get_objects(request, *args, **kwargs)


class UpdateProfileView(BaseCustomAPIView, CreateImageMixin):
    """
    view to handle change profile
    """

    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated, IsProfileAccountOwner]
    filter_backends = [DjangoFilterBackend]
    filterset_class = ProfileFilter
    ordering_fields = ["created_at"]
    ordering = ["created_at"]
    parser_classes = (MultiPartParser, FormParser)

    class Meta:
        model = Profile
        verbose_name = "profile"
        verbose_name_plural = "profiles"

    def get_model(self):
        return self.Meta.model

    def patch(self, request, *args, **kwargs):
        profile = self.get_object(*args, **kwargs)
        avatar = request.FILES.get("avatar", False)
        data = request.data
        user_name = data.get("user_name")

        if avatar:
            from apps.utils.enums import ImageTypes

            image = self.create_image(
                data={
                    "image": avatar,
                    "name": (
                        user_name if user_name is not None else profile.user.user_name
                    ),
                    "caption": (
                        user_name if user_name is not None else profile.user.user_name
                    ),
                    "registered_by": self.request.user.pk,
                    "type": ImageTypes.avatar,
                }
            )

            data["avatar"] = image.pk

        if user_name:
            profile.user.user_name = user_name

        serializer = self.get_serializer(
            profile,
            data=data,
            partial=True,
            context={"request": request},
        )
        serializer.is_valid(raise_exception=True)

        with transaction.atomic():
            self.perform_update(serializer)
            profile.user.save()

        return Response(
            {self.get_verbose_name(): serializer.data}, status=status.HTTP_200_OK
        )


class DeleteProfileView(BaseCustomAPIView):
    queryset = Profile.objects.all()
    permission_classes = [IsAuthenticated, IsProfileAccountOwner]

    class Meta:
        model = Profile
        verbose_name = "profile"
        verbose_name_plural = "profiles"

    def get_model(self):
        return self.Meta.model

    def delete(self, request, *args, **kwargs):
        profile = self.get_object(*args, **kwargs)

        with transaction.atomic():
            profile.user.is_active = False
            profile.user.save()
            return self.desactive_object(request, *args, **kwargs)


class ProfileDetailsView(BaseCustomAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

    class Meta:
        model = Profile
        verbose_name = "profile"
        verbose_name_plural = "profiles"

    def get_model(self):
        return self.Meta.model

    def get(self, request, uid=None, *args, **kwargs):
        """
        endpoint to get details profile
        """
        return self.retrive_object(uid=uid, *args, **kwargs)


class FollowWriterView(BaseAPIView):
    queryset = Follower.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = FollowerSerializer

    class Meta:
        model = Follower
        verbose_name = "follower"
        verbose_name_plural = "followers"

    def get_permissions(self):
        if self.request.method in ["POST", "DELETE"]:
            return [IsAuthenticated()]
        return super().get_permissions()

    def get_model(self):
        return self.Meta.model

    def post(self, request, *args, **kwargs):
        follower = request.user
        writer = request.data.get("writer")

        if not writer:
            return Response(
                {"error": "Writer ID is required."}, status=status.HTTP_400_BAD_REQUEST
            )
        try:
            writer_profile = Profile.objects.get(pk=writer)
        except Profile.DoesNotExist:
            return Response(
                {"error": "Writer not found."}, status=status.HTTP_404_NOT_FOUND
            )

        if Follower.objects.filter(
            follower=follower.profile, writer=writer_profile
        ).exists():
            return Response(
                {"error": "You are already following this writer."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if follower == writer_profile.user:
            return Response(
                {"error": "You cannot follow yourself."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializer = self.get_serializer(
            data={
                "follower": str(follower.profile.uid),
                "writer": str(writer_profile.uid),
            }
        )

        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def delete(self, request, *args, **kwargs):
        follower = request.user
        writer = request.data.get("writer")
        if not writer:
            return Response(
                {"error": "Writer ID is required."}, status=status.HTTP_400_BAD_REQUEST
            )
        try:
            writer_profile = Profile.objects.get(pk=writer)
        except Profile.DoesNotExist:
            return Response(
                {"error": "Writer not found."}, status=status.HTTP_404_NOT_FOUND
            )

        try:
            follow_instance = Follower.objects.get(
                follower=follower, writer=writer_profile
            )
            follow_instance.delete()
            return Response(
                {"message": "Unfollowed successfully."},
                status=status.HTTP_204_NO_CONTENT,
            )
        except Follower.DoesNotExist:
            return Response(
                {"error": "You are not following this writer."},
                status=status.HTTP_400_BAD_REQUEST,
            )


class AuthenticatedProfileDetailsView(BaseCustomAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ProfileSerializer

    class Meta:
        model = Profile
        verbose_name = "profile"
        verbose_name_plural = "profiles"

    def get_model(self):
        return self.Meta.model

    def get(self, request, *args, **kwargs):
        """
        endpoint to get  profile of the authenticated user
        """
        user = request.user
        profile = Profile.objects.get(user=user)
        profile_data = self.get_serializer(profile).data
        return Response(profile_data, status=status.HTTP_200_OK)


class GetProfileByUsernameView(BaseCustomAPIView):
    permission_classes = [AllowAny]
    serializer_class = ProfileSerializer

    class Meta:
        model = Profile
        verbose_name = "profile"
        verbose_name_plural = "profiles"

    def get_model(self):
        return self.Meta.model

    def get(self, request, *args, **kwargs):
        """
        endpoint to get profile by username
        """
        username = self.kwargs.get("username", None)
        if not username:
            return Response(
                {"error": "Username is required."}, status=status.HTTP_400_BAD_REQUEST
            )
        try:
            profile = Profile.objects.get(user__user_name=username)
        except Profile.DoesNotExist:
            return Response(
                {"error": "Profile not found."}, status=status.HTTP_404_NOT_FOUND
            )
        profile_data = self.get_serializer(profile).data
        return Response(profile_data, status=status.HTTP_200_OK)
