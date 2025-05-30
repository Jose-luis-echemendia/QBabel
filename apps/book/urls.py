from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BookViewSet, ReadBookView

router = DefaultRouter()
router.register(r"book", BookViewSet)

urlpatterns = [
    path("book/read/<uuid:uid>/", ReadBookView.as_view(), name="read-book"),
    path("", include(router.urls)),
]
