from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from apps.book.models import Book
from .models import Comment
from .serializers import CommentSerializer


class CommentViewSet(APIView):
    """
    View to handle comment requests.
    """

    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = Comment.objects.all()
        if "state" not in self.request.GET:
            queryset = queryset.filter(is_active=True)
        return queryset

    def perform_create(self, serializer):
        return serializer.save()

    def validate(self, request_data, *args, **kwargs):
        """
        Validate the request data.
        """
        if not request_data.get("comment"):
            return Response(
                {"error": "Comment is required."}, status=status.HTTP_400_BAD_REQUEST
            )

        if not request_data.get("rating"):
            return Response(
                {"error": "Rating is required."}, status=status.HTTP_400_BAD_REQUEST
            )

        return super().validate(request_data, *args, **kwargs)

    def get(self, request, pk=None, *args, **kwargs):
        """
        List all comments.
        """
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
