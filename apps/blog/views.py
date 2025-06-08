from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.decorators import action
from apps.utils.views.abstract_views import BaseViewSet
from apps.utils.mixins import CreateImageMixin
from apps.utils.pagination import SmallSetPagination
from .models import Post
from .serializers import PostSerializer


class PostsViewSet(BaseViewSet, CreateImageMixin):
    permission_classes = [IsAuthenticated]

    queryset = Post.objects.all()
    book = None
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = SmallSetPagination
    filterset_class = None
    parser_classes = (MultiPartParser, FormParser)

    class Meta:
        model = Post
        verbose_name = "post"
        verbose_name_plural = "posts"

    def get_model(self):
        return self.Meta.model

    def get_permissions(self):
        if self.request.method == "GET":
            self.permission_classes = [AllowAny]
        return super().get_permissions()

    def list(self, request, pk=None, *args, **kwargs):
        if pk:
            object = self.get_object(pk=pk)
            return Response(
                {"post": PostSerializer(object).data}, status=status.HTTP_200_OK
            )

        posts = Post.post_objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response({"posts": serializer.data}, status=status.HTTP_200_OK)

    def create(self, request, *args, **kwargs):

        data = request.data
        image = data.get("image", None)
        title = data.get("title", None)

        if not image:
            return Response(
                {"error": "Image is required."}, status=status.HTTP_400_BAD_REQUEST
            )

        if not title:
            return Response(
                {"error": "Title is required."}, status=status.HTTP_400_BAD_REQUEST
            )

        from apps.utils.enums import ImageTypes

        data["image"] = self.create_image(
            data={
                "image": image,
                "name": title,
                "caption": title,
                "registered_by": self.request.user.pk,
                "type": ImageTypes.category,
            }
        ).uid

        data["author"] = self.request.user.pk

        serializer = PostSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        post = self.perform_create(serializer)
        return Response(
            {"post": PostSerializer(post).data}, status=status.HTTP_201_CREATED
        )

    @action(detail=True, methods=["PATCH"])
    def publish(self, request, uid=None, *args, **kwargs):
        instance = self.get_object(*args, **kwargs)

        from .enums import StatusPost

        if instance.status == StatusPost.published:
            return Response(
                {"detail": f"This {self.get_verbose_name()} is already published."},
                status=status.HTTP_400_BAD_REQUEST,
            )
        if instance.status == StatusPost.archived:
            return Response(
                {
                    "detail": f"This {self.get_verbose_name()} is archived and cannot be published."
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        instance.status = StatusPost.published
        instance.save()
        return Response(
            {"detail": f"{self.get_verbose_name()} published successfully."},
            status=status.HTTP_200_OK,
        )
