from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import ValidationError
from apps.book.models import Book
from .models import Library, Item
from .serializers import LibrarySerializer


class LibraryView(APIView):
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


class AddBookView(APIView):
    """
    View to add a book to the library.
    """

    permission_classes = [IsAuthenticated]

    def validate_book(self, book_uid):
        if not isinstance(book_uid, str):
            raise ValidationError("Book UID must be a string")

        if not Book.objects.filter(pk=book_uid).exists():
            raise ValidationError("Book with this UID does not exist")

    def post(self, request):
        book = request.data.get("book")
        if not book:
            raise ValidationError("Book UID is required")
        self.validate_book(book)
        user = request.user
        library = Library.objects.get(user=user)
        Item.objects.create(library=library, book=Book.objects.get(pk=book))
        return Response(
            {"library": LibrarySerializer(library).data}, status=status.HTTP_201_CREATED
        )


class DisaggregateBookView(APIView):
    """
    View to disaggregate a book from the library.
    """

    permission_classes = [IsAuthenticated]

    def post(self, request):
        # Logic to disaggregate a book

        return Response(
            {"message": "Book disaggregated successfully"}, status=status.HTTP_200_OK
        )
