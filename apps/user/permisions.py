from rest_framework import permissions
from .enums import RoleType

class IsSuperUserRole(permissions.BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_superuser and request.user.role == RoleType.admin)

class IsAdminRole(permissions.BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.role == RoleType.admin)
    
class IsPromptEngineerRole(permissions.BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.role == RoleType.prompt_engineer)    
    
class IsDesignerRole(permissions.BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.role == RoleType.designer)

class IsUserRole(permissions.BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.role == RoleType.user)