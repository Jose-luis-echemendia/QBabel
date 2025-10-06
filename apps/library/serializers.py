from rest_framework import serializers
from apps.utils.serializers.abstract_serializers import AbstractBaseSerializer
from apps.book.models import Book
from .models import Library, Item
from django.contrib.auth import get_user_model


User = get_user_model()


class LibrarySerializer(AbstractBaseSerializer):
    user = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), write_only=True
    )
    user_details = serializers.SerializerMethodField()
    items = serializers.SerializerMethodField()

    class Meta:
        model = Library
        fields = AbstractBaseSerializer.Meta.fields + [
            "user",
            "user_details",
            "total_items",
            "items",
        ]

    def get_user_details(self, obj):
        """
        Get the details of the user.
        """
        from apps.user.serializers import UserListSerializer

        return UserListSerializer(obj.user).data if obj.user else None

    def get_items(self, obj):
        """
        Get the items in the library.
        """
        return ItemSerializer(obj.items.all(), many=True).data if obj.items else None


class ItemSerializer(AbstractBaseSerializer):
    library = serializers.PrimaryKeyRelatedField(
        queryset=Library.objects.all(), write_only=True
    )
    book = serializers.PrimaryKeyRelatedField(
        queryset=Book.objects.all(), write_only=True
    )
    book_details = serializers.SerializerMethodField()

    class Meta:
        model = Item
        fields = AbstractBaseSerializer.Meta.fields + [
            "library",
            "book",
            "book_details",
            "is_filed",
            "is_sold",
        ]

    def get_library_details(self, obj):
        """
        Get the details of the library.
        """
        from apps.library.serializers import LibrarySerializer

        return LibrarySerializer(obj.library).data if obj.library else None

    def get_book_details(self, obj):
        """
        Get the details of the book.
        """
        from apps.book.serializers import BookSerializer

        return BookSerializer(obj.book).data if obj.book else None
