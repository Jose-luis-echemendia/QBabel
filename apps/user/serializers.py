from django.contrib.auth import get_user_model
from .validators import validate_password_strength
from rest_framework import serializers
from django.core.exceptions import ValidationError
from apps.utils.utils import desconvertir_de_snake_case
from apps.utils.serializers.abstract_serializers import AbstractBaseSerializer

User = get_user_model()


class UserCreateSerializer(AbstractBaseSerializer):
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
        extra_kwargs = {"password": {"write_only": True}}
        read_only_fields = ("uid", "created_at", "updated_at")

    def validate_password(self, value):
        if value is None:
            return None  # No validar si el valor es None
        try:
            validate_password_strength(value)
        except ValidationError as e:
            raise serializers.ValidationError(e.messages)
        return value

    def create(self, validated_data):
        is_superuser = validated_data.pop("is_superuser", False)

        if is_superuser:
            return User.objects.create_superuser(**validated_data)

        return User.objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        password = validated_data.pop("password", None)
        if password:
            instance.set_password(password)
        return super().update(instance, validated_data)


class UserListSerializer(AbstractBaseSerializer):

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
        extra_kwargs = {"password": {"write_only": True}}
        read_only_fields = ("uid", "created_at", "updated_at")

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation["is_superuser"] = 1 if instance.is_superuser else 0
        representation["is_staff"] = 1 if instance.is_staff else 0
        representation["role"] = desconvertir_de_snake_case(representation["role"])
        return representation
