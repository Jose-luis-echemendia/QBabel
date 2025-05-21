from django.urls import path
from .views import CommentView


urlpatterns = [
    path("comments/<uuid:pk>/", CommentView.as_view(), name="coments"),
]
