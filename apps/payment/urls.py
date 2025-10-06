from django.urls import path
from .views import BuyBookView, GetPurchaseInvoicesView, GetPaymentsBooksForUserView


urlpatterns = [
    path("payments-books/", GetPaymentsBooksForUserView.as_view()),
    path("payment/", BuyBookView.as_view()),
    path("payments/", GetPurchaseInvoicesView.as_view()),
]
