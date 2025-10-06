from django.contrib import admin
from .models import Profile, BankAccount


class ProfileAdmin(admin.ModelAdmin):
    list_display = ("uid", "user_name", "created_at")
    search_fields = ("user_name",)
    list_filter = ("created_at",)
    ordering = ("-created_at",)
    list_per_page = 20
    list_display_links = ("uid", "user_name")


admin.site.register(Profile, ProfileAdmin)
admin.site.register(BankAccount)
