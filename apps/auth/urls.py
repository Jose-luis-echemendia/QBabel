from django.urls import path
from .views import BasicAuthView, AdminAuthView, LogoutView, CustomTokenRefreshView

urlpatterns = [
    path('token/jwt/create/users/', BasicAuthView.as_view(), name='basic-auth'),
    path('token/jwt/create/admins/', AdminAuthView.as_view(), name='admin-auth'),
    path('token/jwt/refresh/custom/', CustomTokenRefreshView.as_view(), name='token_refresh_custom'),
    path('logout/', LogoutView.as_view(), name='logout'),
]
    