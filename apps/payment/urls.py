from django.urls import path
from .views import BuyBookView, GetPurchaseInvoicesView


urlpatterns = [
    path("payment/", BuyBookView.as_view()),
    path("payments/", GetPurchaseInvoicesView.as_view()),
]
