from apps.utils.views.abstract_views import BaseCustomAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response
from rest_framework import status
from .models import PurchaseInvoices
from .filters import PurchaseInvoicesFilter
from .serializers import PurchaseInvoicesSerializer
from .mixins import ValidateRegisterPaymentMixin


class BuyBookView(BaseCustomAPIView, ValidateRegisterPaymentMixin):
    """
    View to handle book purchase requests.
    """

    permission_classes = [IsAuthenticated]
    serializer_class = PurchaseInvoicesSerializer

    class Meta:
        model = PurchaseInvoices
        verbose_name = "purchaseInvoices"
        verbose_name_plural = "purchasesInvoices"

    def get_model(self):
        return self.Meta.model

    def validate(self, request_data):
        return self.validate_data(request_data)

    def post(self, request, *args, **kwargs):

        try:
            validated_data = self.validate(request.data)
        except ValidationError as e:
            return Response({"detail": e.detail}, status=status.HTTP_400_BAD_REQUEST)

        book = validated_data.get("book")
        from apps.library.models import Item

        if Item.objects.filter(
            book=book, is_sold=True, library=request.user.library.uid
        ).exists():
            raise ValidationError({"detail": "The book is purchase."})

        item = Item.objects.filter(book=book, library=request.user.library.uid).first()
        item.is_sold = True
        item.save()

        validated_data["profit"] = round(validated_data["final_payment"] * 0.1, 2)
        validated_data["writer_profit"] = round(
            validated_data["final_payment"] * 0.9, 2
        )
        serializer = self.get_serializer(data=validated_data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {self.get_verbose_name(): serializer.data}, status=status.HTTP_201_CREATED
        )


class GetPurchaseInvoicesView(BaseCustomAPIView):
    """
    View to handle book purchase requests.
    """

    queryset = PurchaseInvoices.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = PurchaseInvoicesSerializer
    filterset_class = PurchaseInvoicesFilter

    class Meta:
        model = PurchaseInvoices
        verbose_name = "purchaseInvoices"
        verbose_name_plural = "purchasesInvoices"

    def get_model(self):
        return self.Meta.model

    def get(self, request, *args, **kwargs):
        return self.get_objects(request, *args, **kwargs)


class GetPaymentsBooksForUserView(BaseCustomAPIView):
    """
    View to handle get all Payments Books for user.
    """

    queryset = PurchaseInvoices.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = None
    filterset_class = PurchaseInvoicesFilter

    class Meta:
        model = PurchaseInvoices
        verbose_name = "purchaseInvoices"
        verbose_name_plural = "purchasesInvoices"

    def get_model(self):
        return self.Meta.model

    def get(self, request, *args, **kwargs):
        books_payments = self.queryset.filter(buyer=request.user)
        uids = list(
            books_payments.values_list("book", flat=True)
        )  # Solo obtenemos los UIDs
        return Response(uids, status=status.HTTP_200_OK)  # Estructura simplificada
