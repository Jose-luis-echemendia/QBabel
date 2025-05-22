from django.urls import path
from .views import (
    ProfileView,
    ProfileDetailsView,
    AuthenticatedProfileDetailsView,
    FollowWriter,
    GetProfileByUsername,
)

urlpatterns = [
    path("profile/", ProfileView.as_view()),
    path("profile/<uuid:pk>/", ProfileDetailsView.as_view()),
    path("profile/username/<str:username>/", GetProfileByUsername.as_view()),
    path("profile/follow", FollowWriter.as_view()),
    path("profile/me/", AuthenticatedProfileDetailsView.as_view()),
]
