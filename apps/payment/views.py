from apps.utils.views.abstract_views import BaseCustomAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response
from rest_framework import status
from .models import PurchaseInvoices
from .filters import PurchaseInvoicesFilter


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
        return super().validate(request_data)

    def post(self, request, *args, **kwargs):

        try:
            validated_data = self.validate(request.data)
        except ValidationError as e:
            return Response({"detail": e.detail}, status=status.HTTP_400_BAD_REQUEST)
        payment = data.get("final_payment")  
        profit =   
    

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
