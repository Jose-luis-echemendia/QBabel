from rest_framework import permissions
from django.contrib.auth.models import AnonymousUser
from .enums import RoleType


class IsSuperUserRole(permissions.BasePermission):
    def has_permission(self, request, view):
        if not request.user or isinstance(request.user, AnonymousUser):
            return False
        return bool(request.user.is_superuser and request.user.role == RoleType.admin)


class IsAdminRole(permissions.BasePermission):
    def has_permission(self, request, view):
        if not request.user or isinstance(request.user, AnonymousUser):
            return False
        return bool(request.user.role == RoleType.admin)


class IsAuthorRole(permissions.BasePermission):
    def has_permission(self, request, view):
        if not request.user or isinstance(request.user, AnonymousUser):
            return False
        return bool(request.user.role == RoleType.author)


class IsUserRole(permissions.BasePermission):
    def has_permission(self, request, view):
        if not request.user or isinstance(request.user, AnonymousUser):
            return False
        return bool(request.user.role == RoleType.user)


class IsAccountOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if not request.user or isinstance(request.user, AnonymousUser):
            return False
        return bool(obj == request.user)
