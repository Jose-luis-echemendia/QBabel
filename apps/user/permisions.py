from rest_framework import permissions
from .enums import RoleType

class IsSuperUserRole(permissions.BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_superuser and request.user.role == RoleType.admin)

class IsAdminRole(permissions.BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.role == RoleType.admin)

class IsAuthorRole(permissions.BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.role == RoleType.author)

class IsUserRole(permissions.BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.role == RoleType.user)
    
class IsAccountOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj == request.user
    
