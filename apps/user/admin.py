from django.contrib import admin
from django.contrib.auth import get_user_model

User = get_user_model()


class UserAccountAdmin(admin.ModelAdmin):
    list_display = ("uid", "email", "user_name", "role", "is_active")


admin.site.register(User, UserAccountAdmin)
