from django.contrib import admin
from .models import Library, Item


class LibraryAdmin(admin.ModelAdmin):
    list_display = ("user", "total_items")
    search_fields = ("user__username",)
    list_filter = ("total_items",)


class ItemAdmin(admin.ModelAdmin):
    list_display = ("book", "library", "is_sold", "is_filed")


admin.site.register(Library, LibraryAdmin)
admin.site.register(Item, ItemAdmin)
