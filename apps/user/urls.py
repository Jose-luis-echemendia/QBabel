from django.urls import path
from .views import RegisterUserView, ListUserView, GetAuthenticatedUserView



urlpatterns = [
    path("user-register/", RegisterUserView.as_view(), name="register_user"),
    path("user-list/", ListUserView.as_view(), name="list_user"),
    path("users/me/", GetAuthenticatedUserView.as_view(), name="get_authenticated_user"),
]
