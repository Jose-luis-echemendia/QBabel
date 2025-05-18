from .serializers import ProfileSerializer, FollowerSerializer
from .models import Profile, Follower
from .filters import ProfileFilter
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from django_filters.rest_framework import DjangoFilterBackend
from apps.utils.pagination import MediumSetPagination
from django.shortcuts import get_object_or_404


class ProfileView(APIView):
    """
    view to handle profiles requested by the user
    """

    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_class = ProfileFilter
    ordering_fields = ["created_at"]
    ordering = ["created_at"]

    def get_queryset(self):
        queryset = Profile.objects.all()
        if "state" not in self.request.GET:
            queryset = queryset.filter(is_active=True)
        return queryset

    def get_object(self):
        """
        Retrieve the profile instance based on the provided ID.
        """
        queryset = self.get_queryset()
        obj = get_object_or_404(queryset, pk=self.kwargs.get("pk"))
        self.check_object_permissions(self.request, obj)
        return obj

    def perform_create(self, serializer):
        return serializer.save()

    def filter_queryset(self, queryset):
        filterset = self.filterset_class(
            self.request.GET, queryset=queryset, request=self.request
        )
        if not filterset.is_valid():
            raise ValueError(f"Invalid filter data: {filterset.errors}")
        queryset = filterset.qs
        return queryset

    def order_queryset(self, queryset):
        ordering = self.request.GET.get("ordering", None)
        if ordering:
            queryset = queryset.order_by(*ordering.split(","))
        return queryset

    def get(self, request, *args, **kwargs):
        """
        endpoint to get all profiles of the authenticated user
        """
        queryset = self.get_queryset()
        if not queryset.exists():
            return Response(
                {"details": "not profile found"}, status=status.HTTP_404_NOT_FOUND
            )

        filtered_queryset = self.filter_queryset(queryset)
        ordered_queryset = self.order_queryset(filtered_queryset)
        paginator = MediumSetPagination()
        results = paginator.paginate_queryset(ordered_queryset, request)
        profiles_data = self.serializer_class(results, many=True).data
        return paginator.get_paginated_response({"profiles": profiles_data})

    def put(self, request, *args, **kwargs):
        """
        Endpoint to update an profile (full update).
        """
        instance = self.get_object()  # Obtén la instancia que se va a actualizar
        serializer = self.serializer_class(instance, data=request.data, partial=False)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, *args, **kwargs):
        """
        Endpoint to partially update an profile.
        """
        instance = self.get_object()  # Obtén la instancia que se va a actualizar
        serializer = self.serializer_class(instance, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProfileDetailsView(APIView):
    def get_object(self):
        """
        Retrieve the profile instance based on the provided ID.
        """
        obj = get_object_or_404(Profile, pk=self.kwargs.get("pk"))
        self.check_object_permissions(self.request, obj)
        return obj

    def get(self, request, *args, **kwargs):
        """
        endpoint to get all profiles of the authenticated user
        """
        profile = self.get_object()
        profile_data = ProfileSerializer(profile).data
        return Response(profile_data, status=status.HTTP_200_OK)


class FollowWriter(APIView):
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
        if follower == writer_profile.user:
            return Response(
                {"error": "You cannot follow yourself."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializer = FollowerSerializer(
            data={"follower": follower.id, "writer": writer_profile.id}
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


class AuthenticatedProfileDetailsView(APIView):
    def get(self, request, *args, **kwargs):
        """
        endpoint to get all profiles of the authenticated user
        """
        user = request.user
        profile = Profile.objects.get(user=user)
        profile_data = ProfileSerializer(profile).data
        return Response(profile_data, status=status.HTTP_200_OK)


class GetProfileByUsername(APIView):
    permission_classes = [AllowAny()]

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
        profile_data = ProfileSerializer(profile).data
        return Response(profile_data, status=status.HTTP_200_OK)
