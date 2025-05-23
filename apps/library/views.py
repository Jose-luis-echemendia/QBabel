from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import ValidationError
from apps.book.models import Book
from apps.utils.views.abstract_views import BaseCustomAPIView
from .models import Library, Item
from .serializers import LibrarySerializer
from .mixins import ValidateBookItem


class LibraryView(BaseCustomAPIView):
    """
    View to manage the library.
    """

    permission_classes = [IsAuthenticated]

    def get(self, request):
        # Logic to retrieve library information
        user = request.user
        library = Library.objects.get(user=user)

        return Response(
            {"library": LibrarySerializer(library).data}, status=status.HTTP_200_OK
        )


class AddBookView(BaseCustomAPIView, ValidateBookItem):
    """
    View to add a book to the library.
    """

    permission_classes = [IsAuthenticated]

    def post(self, request):
        book = request.data.get("book", None)
        try:
            self.validate_book(book)
        except ValidationError as e:
            return Response({"detail": e.detail}, status=status.HTTP_404_NOT_FOUND)
        user = request.user
        library = Library.objects.get(user=user)
        Item.objects.create(library=library, book=Book.objects.get(pk=book))
        return Response(
            {"library": LibrarySerializer(library).data}, status=status.HTTP_201_CREATED
        )


class DisaggregateBookView(BaseCustomAPIView, ValidateBookItem):
    """
    View to disaggregate a book from the library.
    """

    permission_classes = [IsAuthenticated]

    def delete(self, request):
        book = request.data.get("book", None)
        try:
            self.validate_book(book)
        except ValidationError as e:
            return Response({"detail": e.detail}, status=status.HTTP_404_NOT_FOUND)
        user = request.user
        library = Library.objects.get(user=user)
        try:
            Item.objects.get(library=library, book=Book.objects.get(pk=book)).delete()
        except Item.DoesNotExist:
            return Response({"detail": "Item not found"}, status=status.HTTP_404_NOT_FOUND)
        
        return Response(
            {"library": LibrarySerializer(library).data}, status=status.HTTP_204_NO_CONTENT
        )
