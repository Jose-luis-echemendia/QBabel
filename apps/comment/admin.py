from django.contrib import admin
from .models import Comment


class CommentAdmin(admin.ModelAdmin):
    """
    Admin view for the Comment model.
    """

    list_display = ("user", "book", "comment", "rating", "like", "deslike")
    search_fields = ("user__username", "book__title", "comment")
    list_filter = ("rating", "created_at")
    ordering = ("-created_at",)


admin.site.register(Comment, CommentAdmin)
