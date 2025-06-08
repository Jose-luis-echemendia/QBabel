from django.contrib import admin
from .models import Post


class PostAdmin(admin.ModelAdmin):
    list_display = ("uid", "title", "author", "publication_date", "status")
    search_fields = ("title", "content")
    list_filter = ("status", "category")
    ordering = ("-publication_date",)


admin.site.register(Post, PostAdmin)
