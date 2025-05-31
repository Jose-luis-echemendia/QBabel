from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from apps.book.models import Book
from apps.utils.views.abstract_views import BaseViewSet, BaseCustomAPIView
from rest_framework.permissions import AllowAny
from .models import Comment
from .serializers import CommentSerializer
from .filters import CommentFilter
from .pagination import CommentPagination


class GetCommentFromBook(BaseCustomAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    filterset_class = CommentFilter
    permission_classes = [AllowAny]
    pagination_class = CommentPagination

    class Meta:
        model = Comment
        verbose_name = "comment"
        verbose_name_plural = "comments"

    def get_model(self):
        return self.Meta.model

    def get(self, request, uid=None, *args, **kwargs):
        """
        List all comments from book.
        """
        if not uid:
            return Response(
                {"error": "Book ID is required."}, status=status.HTTP_400_BAD_REQUEST
            )
        comments = Comment.objects.filter(book__uid=uid)
        paginator = CommentPagination()
        results_page = paginator.paginate_queryset(comments, request)
        serialized_data = self.get_serializer(results_page, many=True).data
        return paginator.get_paginated_response(
            {self.get_verbose_name_plural(): serialized_data}
        )


class CommentViewSet(BaseViewSet):
    """
    View to handle comment requests.
    """

    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    filterset_class = CommentFilter
    permission_classes = [IsAuthenticated]

    class Meta:
        model = Comment
        verbose_name = "comment"
        verbose_name_plural = "comments"

    def get_model(self):
        return self.Meta.model

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

    def create(self, request, *args, **kwargs):
        """
        Create a new comment.
        """

        data = request.data.copy()

        book_uid = data.get("book", None)
        rating = data.get("rating", None)

        if not rating:
            return Response(
                {"error": "Rating is required"}, status=status.HTTP_400_BAD_REQUEST
            )

        if not isinstance(rating, int):
            return Response(
                {"error": "Rating is required"}, status=status.HTTP_400_BAD_REQUEST
            )

        if rating > 5 or rating < 0:
            return Response(
                {"error": "Rating is out range"}, status=status.HTTP_400_BAD_REQUEST
            )

        if not book_uid:
            return Response(
                {"error": "Book ID is required."}, status=status.HTTP_400_BAD_REQUEST
            )

        try:
            book = Book.objects.get(uid=book_uid)
        except Book.DoesNotExist:
            return Response(
                {"error": "Book not found."}, status=status.HTTP_404_NOT_FOUND
            )
        # if Comment.objects.filter(user=request.user, book=book).exists():
        #    return Response(
        #        {"error": "You have already commented on this book."},
        #        status=status.HTTP_400_BAD_REQUEST,
        #    )
        data["book"] = book.uid
        data["user"] = request.user.pk

        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user, book=book)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def update(self, request, pk=None, *args, **kwargs):
        """
        Update a comment.
        """
        if not pk:
            return Response(
                {"error": "Comment ID is required."}, status=status.HTTP_400_BAD_REQUEST
            )
        try:
            comment = Comment.objects.get(uid=pk)
        except Comment.DoesNotExist:
            return Response(
                {"error": "Comment not found."}, status=status.HTTP_404_NOT_FOUND
            )

        if comment.user != request.user:
            return Response(
                {"error": "You do not have permission to edit this comment."},
                status=status.HTTP_403_FORBIDDEN,
            )

        serializer = self.get_serializer(comment, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, pk=None, *args, **kwargs):
        """
        Delete a comment.
        """
        if not pk:
            return Response(
                {"error": "Comment ID is required."}, status=status.HTTP_400_BAD_REQUEST
            )
        try:
            comment = Comment.objects.get(uid=pk)
        except Comment.DoesNotExist:
            return Response(
                {"error": "Comment not found."}, status=status.HTTP_404_NOT_FOUND
            )

        if comment.user != request.user:
            return Response(
                {"error": "You do not have permission to delete this comment."},
                status=status.HTTP_403_FORBIDDEN,
            )

        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
