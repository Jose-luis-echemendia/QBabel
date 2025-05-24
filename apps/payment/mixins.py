from apps.book.models import Book
from rest_framework.exceptions import ValidationError
from .models import PurchaseInvoices
from django.contrib.auth import get_user_model

User = get_user_model()


class ValidateRegisterPaymentMixin:
    def validate_data(self, data):
        """
        Validate the register payment request.
        """
        book = self.validate_book(data.get("book", None))
        buyer = self.validate_buyer(data.get("buyer", None))
        final_payment = self.validate_final_payment(data.get("final_payment", None))

        self.validate_unique_payment(book, buyer)

        return {
            "book": book,
            "buyer": buyer,
            "final_payment": final_payment,
        }

    def validate_unique_payment(self, book, buyer):
        """
        Validate if the payment is unique for the book and buyer.
        """
        if PurchaseInvoices.objects.filter(book=book, buyer=buyer).exists():
            raise ValidationError(
                {"detail": "This book has already been purchased by this buyer."}
            )

    def validate_final_payment(self, final_payment):
        if not final_payment:
            raise ValidationError({"final_payment": "This field is required."})

        if not isinstance(final_payment, (int, float)):
            raise ValidationError({"final_payment": "This field must be a number."})
        if final_payment <= 0:
            raise ValidationError(
                {"final_payment": "This field must be greater than 0."}
            )

        return final_payment

    def validate_buyer(self, buyer):
        if not buyer:
            raise ValidationError({"buyer": "This field is required."})

        if not isinstance(buyer, str):
            raise ValidationError({"buyer": "This field must be a string."})

        if not User.objects.filter(pk=buyer).exists():
            raise ValidationError({"buyer": "Buyer does not exist."})

        return buyer

    def validate_book(self, book):
        """
        Validate the book field.
        """
        if not book:
            raise ValidationError({"book": "This field is required."})

        if not isinstance(book, str):
            raise ValidationError({"book": "This field must be a string."})

        if not Book.objects.filter(pk=book).exists():
            raise ValidationError({"book": "Book does not exist."})

        return book
