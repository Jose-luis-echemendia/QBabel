from django.contrib.auth import get_user_model
from rest_framework import serializers
from django.core.exceptions import ValidationError
from apps.utils.utils import desconvertir_de_snake_case
from apps.utils.serializers.abstract_serializers import AbstractBaseSerializer

User = get_user_model()


class ProfileSerializer(AbstractBaseSerializer):
    class Meta:
        model = User
        fields = AbstractBaseSerializer.Meta.fields + [
            "email",
            "user_name",
            "password",
            "is_premium",
            "is_superuser",
            "is_staff",
            "role",
        ]

