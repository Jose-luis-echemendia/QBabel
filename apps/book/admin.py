from django.contrib import admin
from .models import Book, CategoryBook


class BookAdmin(admin.ModelAdmin):
    list_display = ("uid", "__str__", "author", "price")


admin.site.register(Book, BookAdmin)
admin.site.register(CategoryBook)
