from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CustomCategoryViewSet

router = DefaultRouter()
router.register(r'custom-category', CustomCategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
