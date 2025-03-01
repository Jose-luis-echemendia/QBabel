from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import UserAccount

class UserAccountAdmin(UserAdmin):
    list_display = ('email', 'user_name', 'is_staff', 'is_active')
    search_fields = ('email', 'user_name')
    ordering = ('email',)

admin.site.register(UserAccount, UserAccountAdmin)