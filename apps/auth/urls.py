from django.urls import path
from .views import BasicAuthView, AdminAuthView, LogoutView, CustomTokenRefreshView

urlpatterns = [
    path('jwt/users/', BasicAuthView.as_view(), name='basic-auth'),
    path('jwt/admins/', AdminAuthView.as_view(), name='admin-auth'),
    path('api/token/refresh/custom/', CustomTokenRefreshView.as_view(), name='token_refresh_custom'),
    path('logout/', LogoutView.as_view(), name='logout'),
]
    