from django.contrib.auth.models import AnonymousUser
from rest_framework import permissions


class IsProfileAccountOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if not request.user or isinstance(request.user, AnonymousUser):
            return False
        return bool(obj.user == request.user)
