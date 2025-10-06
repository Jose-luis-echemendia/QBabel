from django.urls import path
from .views import (
    GetProfilesView,
    UpdateProfileView,
    DeleteProfileView,
    ProfileDetailsView,
    AuthenticatedProfileDetailsView,
    FollowWriterView,
    GetProfileByUsernameView,
)


urlpatterns = [
    path("profile/", GetProfilesView.as_view()),
    path("profile/<uuid:uid>/", ProfileDetailsView.as_view()),
    path("profile/update/<uuid:uid>/", UpdateProfileView.as_view()),
    path("profile/delete/<uuid:uid>/", DeleteProfileView.as_view()),
    path("profile/username/<str:username>/", GetProfileByUsernameView.as_view()),
    path("profile/follow/", FollowWriterView.as_view()),
    path("profile/me/", AuthenticatedProfileDetailsView.as_view()),
]
