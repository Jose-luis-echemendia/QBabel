from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BookViewSet, ReadBookView, GetBooksHomeView

router = DefaultRouter()
router.register(r"book", BookViewSet)

urlpatterns = [
    path("book/home/", GetBooksHomeView.as_view(), name="books-home"),
    path("book/read/<uuid:uid>/", ReadBookView.as_view(), name="read-book"),
    path("", include(router.urls)),
]
    