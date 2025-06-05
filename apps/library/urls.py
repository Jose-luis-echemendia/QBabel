from django.urls import path
from .views import LibraryView, AddBookView, DisaggregateBookView, ItemsView

urlpatterns = [
    path("library/", LibraryView.as_view(), name="library"),
    path("library/items/", ItemsView.as_view(), name="items"),
    path("library/add-book/", AddBookView.as_view(), name="add-book"),
    path(
        "library/disaggregate-book/<uuid:uid>/",  # -> recibe el uid del libro
        DisaggregateBookView.as_view(),
        name="disaggregate-book",
    ),
]
