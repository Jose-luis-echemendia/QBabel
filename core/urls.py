from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("apps.authentication.urls")),
    path("api/", include("apps.user.urls")),
    path("api/", include("apps.category.urls")),
    path("api/", include("apps.profile.urls")),
    path("api/", include("apps.book.urls")),
    path("api/", include("apps.blog.urls")),
    path("api/", include("apps.library.urls")),
    path("api/", include("apps.comment.urls")),
    path("api/", include("apps.payment.urls")),
]
