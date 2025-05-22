from apps.utils.serializers.abstract_serializers import (
    AuditUserChangeSerializer,
    AbstractBaseSerializer,
    AbstractImageSerializer,
)
from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Category

User = get_user_model()


class CategorySerializer(
    AbstractBaseSerializer, AuditUserChangeSerializer, AbstractImageSerializer
):

    class Meta:
        model = Category
        fields = (
            AbstractBaseSerializer.Meta.fields
            + ["name", "description", "parent", "type"]
            + AuditUserChangeSerializer.Meta.fields
            + AbstractImageSerializer.Meta.fields
        )
        extra_kwargs = {"parent": {"write_only": True}}

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        withparent = self.context.get("withparent", False)
        if not withparent:
            return representation

        representation["children_categories"] = [
            CategorySerializer(category, context=self.context).data
            for category in Category.objects.filter(parent=representation.get("uid"))
            or instance.children.all()
        ]

        return representation
