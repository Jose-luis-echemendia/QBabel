from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import UserAccount

class UserAccountAdmin(UserAdmin):
    # Campos que se mostrarán en la lista de usuarios
    list_display = ('email', 'user_name', 'is_staff', 'is_active')
    
    # Campos que se usarán para buscar usuarios
    search_fields = ('email', 'user_name')
    
    # Ordenamiento por defecto
    ordering = ('email',)
    
    # Configuración del formulario de edición
    fieldsets = (
        (None, {'fields': ('email', 'user_name', )}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login',)}),  # Elimina 'date_joined' si no lo tienes
    )
    
    # Configuración del formulario de creación
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'user_name', 'password1', 'password2', 'is_staff', 'is_active'),
        }),
    )

# Registra el modelo con la clase personalizada de admin
admin.site.register(UserAccount, UserAccountAdmin)