from django.urls import path
from .views import LibraryView, AddBookView, DisaggregateBookView

urlpatterns = [
    path("library/", LibraryView.as_view(), name="library"),
    path("add-book/", AddBookView.as_view(), name="add-book"),
    path("disaggregate-book", DisaggregateBookView.as_view(), name="disaggregate-book"),
]
