from django.urls import path
from .views import BuyBookView, GetPurchaseInvoicesView


urlpatterns = [
    path("payment/", BuyBookView.as_view()),
    path("payment/", GetPurchaseInvoicesView.as_view()),
]
