from django.urls import path
from .views import PostsView

urlpatterns = [
    path("post/", PostsView.as_view(), name="post"),
    path("post/<uuid:pk>", PostsView.as_view(), name="pk-post"),
]
