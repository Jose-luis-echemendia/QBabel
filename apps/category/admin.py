from django.contrib import admin
from .models import Category


class CategoryAdmin(admin.ModelAdmin):
    list_display = ("uid", "__str__", "type", "created_at")


admin.site.register(Category, CategoryAdmin)
