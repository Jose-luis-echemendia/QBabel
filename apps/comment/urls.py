from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    CommentViewSet,
    GetCommentFromBookView,
    ReactCommentView,
    UnReactCommentView,
)

router = DefaultRouter()
router.register(r"comment", CommentViewSet)

urlpatterns = [
    path("comment/react/", ReactCommentView.as_view()),
    path("comment/unreact/<uuid:uid>/", UnReactCommentView.as_view()),
    path("comment/book/<uuid:uid>/", GetCommentFromBookView.as_view()),
    path("", include(router.urls)),
]
