from django.urls import path
from .views import ListComentView


urlpatterns = [
    path("comments/<uuid:pk>/", ListComentView.as_view(), name="list_comments"),
]
