from rest_framework import serializers
from apps.utils.serializers.abstract_serializers import AbstractBaseSerializer
from .models import Comment
from django.contrib.auth import get_user_model
from apps.book.models import Book

User = get_user_model()


class CommentSerializer(AbstractBaseSerializer):
    """
    Serializer for the Comment model.
    """

    user = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), write_only=True
    )
    book = serializers.PrimaryKeyRelatedField(
        queryset=Book.objects.all(), write_only=True
    )

    class Meta:
        model = Comment
        fields = AbstractBaseSerializer.Meta.fields + [
            "user",
            "book",
            "comment",
            "rating",
            "like",
            "deslike",
        ]
