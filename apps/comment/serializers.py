from rest_framework import serializers
from apps.utils.serializers.abstract_serializers import AbstractBaseSerializer
from .models import Comment
from django.contrib.auth import get_user_model
from apps.book.models import Book

User = get_user_model()


class CommentSerializer(AbstractBaseSerializer):
    user = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), write_only=True
    )
    profile = serializers.SerializerMethodField()
    book = serializers.PrimaryKeyRelatedField(
        queryset=Book.objects.all(), write_only=True
    )
    rating = serializers.IntegerField(min_value=0, max_value=5, default=0)
    like = serializers.IntegerField(min_value=0, default=0)
    deslike = serializers.IntegerField(min_value=0, default=0)

    class Meta:
        model = Comment
        fields = AbstractBaseSerializer.Meta.fields + [
            "user",
            "profile",
            "book",
            "comment",
            "rating",
            "like",
            "deslike",
        ]
        extra_kwargs = {"comment": {"required": True}}

    def get_profile(self, obj):
        from apps.profile.serializers import ProfileSerializer

        return ProfileSerializer(obj.user.profile).data if obj.user.profile else None
