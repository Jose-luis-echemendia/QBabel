from django.contrib import admin
from django.contrib.auth import get_user_model

User = get_user_model()


class UserAccountAdmin(admin.ModelAdmin):
    list_display = ("uid", "__str__")


admin.site.register(User, UserAccountAdmin)
