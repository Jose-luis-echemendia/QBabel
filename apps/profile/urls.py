from django.urls import path
from .views import ProfileView, ProfileDetailsView, AuthenticatedProfileDetailsView

urlpatterns = [
    path('profile/', ProfileView.as_view()),
    path('profile/<uuid:pk>/', ProfileDetailsView.as_view()),
    path('profile/authenticated/', AuthenticatedProfileDetailsView.as_view()),
]