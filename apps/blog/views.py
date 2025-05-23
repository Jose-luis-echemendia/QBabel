from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from apps.utils.views.abstract_views import BaseViewSet
from .models import Post
from .serializers import PostSerializer
from .mixins import CreateImagePublicationMixin


class PostsView(BaseViewSet, CreateImagePublicationMixin):
    permission_classes = [IsAuthenticated]

    def get_permissions(self):
        if self.request.method == "GET":
            self.permission_classes = [AllowAny]
        return super().get_permissions()

    def get(self, request, pk=None, *args, **kwargs):
        if pk:
            object = self.get_object(pk=pk)
            return Response(
                {"post": PostSerializer(object).data}, status=status.HTTP_200_OK
            )

        posts = Post.post_objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response({"posts": serializer.data}, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):

        data = request.data.copy()
        image = data.pop("image", None)
        title = data.get("title", None)

        if not image:
            return Response(
                {"error": "Image is required."}, status=status.HTTP_400_BAD_REQUEST
            )

        if not title:
            return Response(
                {"error": "Title is required."}, status=status.HTTP_400_BAD_REQUEST
            )

        data["image"] = self.create_image(image, title).uid

        serializer = PostSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        post = self.perform_create(serializer)
        return Response(
            {"post": PostSerializer(post).data}, status=status.HTTP_201_CREATED
        )
