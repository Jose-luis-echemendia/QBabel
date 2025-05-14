from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from apps.book.models import Book
from .models import Comment
from .serializers import CommentSerializer


class ListComentView(APIView):
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
        if not pk:
            return Response(
                {"error": "Book ID is required."}, status=status.HTTP_400_BAD_REQUEST
            )
        comments = Comment.objects.filter(book__uid=pk)
        serializer = self.get_serializer(comments, many=True)
        return Response({"comments": serializer.data}, status=status.HTTP_200_OK)

    def post(self, request, pk=None, *args, **kwargs):
        """
        Create a new comment.
        """
        if not pk:
            return Response(
                {"error": "Book ID is required."}, status=status.HTTP_400_BAD_REQUEST
            )
        data = request.data.copy()

        try:
            book = Book.objects.get(uid=pk)
        except Book.DoesNotExist:
            return Response(
                {"error": "Book not found."}, status=status.HTTP_404_NOT_FOUND
            )
        if Comment.objects.filter(user=request.user, book=book).exists():
            return Response(
                {"error": "You have already commented on this book."},
                status=status.HTTP_400_BAD_REQUEST,
            )
        data["book"] = book.uid
        data["user"] = request.user.pk

        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user, book=book)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
