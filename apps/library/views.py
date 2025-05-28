from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import ValidationError
from apps.book.models import Book
from apps.utils.views.abstract_views import BaseCustomAPIView
from .models import Library, Item
from .serializers import LibrarySerializer, ItemSerializer
from .mixins import ValidateBookItem


class LibraryView(BaseCustomAPIView):
    """
    View to manage the library.
    """

    permission_classes = [IsAuthenticated]
    serializer_class = LibrarySerializer

    class Meta:
        model = Library
        verbose_name = "library"
        verbose_name_plural = "libraries"

    def get_model(self):
        return self.Meta.model

    def get(self, request, *args, **kwargs):
        # Logic to retrieve library information
        user = request.user
        library = Library.objects.get(user=user)

        return Response(
            {self.get_verbose_name(): self.get_serializer(library).data},
            status=status.HTTP_200_OK,
        )


class AddBookView(BaseCustomAPIView, ValidateBookItem):
    """
    View to add a book to the library.
    """

    serializer_class = LibrarySerializer
    permission_classes = [IsAuthenticated]

    class Meta:
        model = Book
        verbose_name = "library"
        verbose_name_plural = "libraries"

    def get_model(self):
        return None

    def post(self, request, *args, **kwargs):
        book_uid = request.data.get("book", None)
        try:
            self.validate_book(book_uid)
        except ValidationError as e:
            return Response({"detail": e.detail}, status=status.HTTP_404_NOT_FOUND)
        user = request.user
        library = Library.objects.get(user=user)
        book = Book.objects.get(pk=book_uid)
        item = ItemSerializer(data={"library": library.uid, "book": book.uid})
        item.is_valid(raise_exception=True)
        self.perform_create(item)

        return Response(
            {self.get_verbose_name(): self.get_serializer(library).data},
            status=status.HTTP_204_NO_CONTENT,
        )


class DisaggregateBookView(BaseCustomAPIView, ValidateBookItem):
    """
    View to disaggregate a book from the library.
    """

    permission_classes = [IsAuthenticated]

    queryset = Book.objects.all()
    serializer_class = LibrarySerializer
    permission_classes = [IsAuthenticated]

    class Meta:
        model = Book
        verbose_name = "library"
        verbose_name_plural = "libraries"

    def get_model(self):
        return self.Meta.model

    def delete(self, request, uid=None, *args, **kwargs):
        if not uid:
            return Response(
                {"detail": "Book UID is required"}, status=status.HTTP_400_BAD_REQUEST
            )

        try:
            self.validate_book(str(uid))
        except ValidationError as e:
            return Response({"detail": e.detail}, status=status.HTTP_404_NOT_FOUND)

        book = self.get_object(*args, **kwargs)
        user = request.user
        library = Library.objects.get(user=user)
        try:
            Item.objects.get(
                library=library, book=Book.objects.get(pk=book.uid)
            ).soft_delete()
        except Item.DoesNotExist:
            return Response(
                {"detail": "Item not found"}, status=status.HTTP_404_NOT_FOUND
            )

        return Response(
            {self.get_verbose_name(): self.get_serializer(library).data},
            status=status.HTTP_204_NO_CONTENT,
        )
