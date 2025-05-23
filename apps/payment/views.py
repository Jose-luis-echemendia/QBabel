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
