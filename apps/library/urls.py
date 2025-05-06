from django.urls import path
from .views import LibraryView, AddBookView, DisaggregateBookView

urlpatterns = [
    path("library/", LibraryView.as_view(), name="library"),
    path("library/add-book/", AddBookView.as_view(), name="add-book"),
    path("library/disaggregate-book", DisaggregateBookView.as_view(), name="disaggregate-book"),
]
