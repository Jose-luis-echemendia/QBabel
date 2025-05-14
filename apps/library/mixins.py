from rest_framework.exceptions import ValidationError
from apps.book.models import Book


class ValidateBookItem:
    def validate_book(self, book_uid):
        if not book_uid:
            raise ValidationError("Book UID is required")

        if not isinstance(book_uid, str):
            raise ValidationError("Book UID must be a string")

        if not Book.objects.filter(pk=book_uid).exists():
            raise ValidationError("Book with this UID does not exist")
