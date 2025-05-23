from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ProfileViewSet,
    ProfileDetailsView,
    AuthenticatedProfileDetailsView,
    FollowWriterView,
    GetProfileByUsernameView,
)

router = DefaultRouter()
router.register(r"profile", ProfileViewSet)

urlpatterns = [
    path("profile/<uuid:uid>/", ProfileDetailsView.as_view()),
    path("profile/username/<str:username>/", GetProfileByUsernameView.as_view()),
    path("profile/follow/", FollowWriterView.as_view()),
    path("profile/me/", AuthenticatedProfileDetailsView.as_view()),
    path("", include(router.urls)),
]
