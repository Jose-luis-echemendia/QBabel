from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import Post
from .serializers import PostSerializer


class PostsView(APIView):
    permission_classes = [AllowAny]
    
    def perform_create(self, serializer):
        return serializer.save()

    def get_object(self, pk, *args, **kwargs):
        try:
            post = Post.post_objects.get(pk=pk)
            return post

        except Post.DoesNotExist:
            return Response(
                {"detail": "post not found"}, status=status.HTTP_404_NOT_FOUND
            )

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
        
        def create_image(self, image, title):
            from apps.utils.serializers.serializers import ImageSerializer
            from apps.utils.enums import ImageTypes

            serializer = ImageSerializer(
                data={
                    "image": image,
                    "type": ImageTypes.blog,
                    "title": title,
                    "registered_by": self.request.user.pk,
                }
            )
            serializer.is_valid(raise_exception=True)
            return self.perform_create(serializer)
        
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
        
        
        data["image"] = create_image(image, title).uid
        
        serializer = PostSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        post = self.perform_create(serializer)
        return Response(
            {"post": PostSerializer(post).data}, status=status.HTTP_201_CREATED
        )