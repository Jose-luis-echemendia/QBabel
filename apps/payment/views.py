from apps.utils.views.abstract_views import BaseCustomAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model
from apps.book.models import Book
from .models import PurchaseInvoices
from .filters import PurchaseInvoicesFilter

User = get_user_model()


class BuyBookView(BaseCustomAPIView):
    """
    View to handle book purchase requests.
    """

    permission_classes = [IsAuthenticated]

    class Meta:
        model = PurchaseInvoices
        verbose_name = "purchaseInvoices"
        verbose_name_plural = "purchasesInvoices"

    def get_model(self):
        return self.Meta.model

    def validate(self, request_data):
        book = request_data.get("book", None)
        buyer = request_data.get("buyer", None)
        final_payment = request_data.get("final_payment", None)

        if not book:
            raise ValidationError({"book": "This field is required."})
        if not buyer:
            raise ValidationError({"buyer": "This field is required."})
        if not final_payment:
            raise ValidationError({"final_payment": "This field is required."})

        if not isinstance(final_payment, (int, float)):
            raise ValidationError({"final_payment": "This field must be a number."})
        if final_payment <= 0:
            raise ValidationError(
                {"final_payment": "This field must be greater than 0."}
            )

        if not isinstance(book, str):
            raise ValidationError({"book": "This field must be a string."})

        if not isinstance(buyer, str):
            raise ValidationError({"buyer": "This field must be a string."})

        if not Book.objects.filter(pk=book).exists():
            raise ValidationError({"book": "Book does not exist."})

        if not User.objects.filter(pk=buyer).exists():
            raise ValidationError({"buyer": "Buyer does not exist."})

        return {
            "book": book,
            "buyer": buyer,
            "final_payment": final_payment,
        }

    def post(self, request, *args, **kwargs):

        try:
            validated_data = self.validate(request.data)
        except ValidationError as e:
            return Response({"detail": e.detail}, status=status.HTTP_400_BAD_REQUEST)
        validated_data["profit"] = validated_data["final_payment"] * 0.1
        validated_data["writer_profit"] = validated_data["final_payment"] * 0.9

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {self.get_verbose_name(): serializer.data}, status=status.HTTP_201_CREATED
        )


class GetPurchaseInvoicesView(BaseCustomAPIView):
    """
    View to handle book purchase requests.
    """

    permission_classes = [IsAuthenticated]
    filterset_class = PurchaseInvoicesFilter

    class Meta:
        model = PurchaseInvoices
        verbose_name = "purchaseInvoices"
        verbose_name_plural = "purchasesInvoices"

    def get_model(self):
        return self.Meta.model

    def get(self, request, *args, **kwargs):
        return self.get_objects(*args, **kwargs)
