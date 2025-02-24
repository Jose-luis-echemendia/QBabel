from django.urls import path
from .views import BasicAuthView, AdminAuthView

urlpatterns = [
    path('jwt/users/', BasicAuthView.as_view(), name='basic-auth'),
    path('jwt/admins/', AdminAuthView.as_view(), name='admin-auth'),
]
    