from rest_framework import serializers
from apps.utils.serializers.abstract_serializers import AbstractBaseSerializer
from apps.utils.models.models import GenericImage, GenericDocument
from apps.category.models import Category
from .models import Book, CategoryBook
from django.contrib.auth import get_user_model


User = get_user_model()


class BookSerializer(AbstractBaseSerializer):
    """
    Serializer for the Book model.
    """

    author = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), write_only=True
    )
    author_details = serializers.SerializerMethodField()

    cover = serializers.PrimaryKeyRelatedField(
        queryset=GenericImage.objects.all(), write_only=True
    )
    cover_details = serializers.SerializerMethodField()

    file = serializers.PrimaryKeyRelatedField(
        queryset=GenericDocument.objects.all(), write_only=True
    )

    price = serializers.FloatField(
        help_text="Price of the book",
    )
    file_details = serializers.SerializerMethodField()

    categories = serializers.SerializerMethodField()
    in_library = serializers.SerializerMethodField()

    class Meta:
        model = Book
        fields = AbstractBaseSerializer.Meta.fields + [
            # "isbn",
            "author",
            "author_details",
            "title",
            "cover",
            "cover_details",
            "synopsis",
            "file",
            "file_details",
            "is_published",
            "published_date",
            "number_chapters",
            "number_pages",
            "lenguage",
            "price",
            "is_discount_active",
            "discount_percentage",
            "discount",
            "price_discounted",
            "discount_start_date",
            "discount_end_date",
            "categories",
            "count_reads",
            "is_complete",
            "is_free",
            "is_paid",
            "license",
            "chapters",
            "reviews",
            "avg_rating",
            "in_library",
        ]
        extra_kwargs = {
            # "isbn": {"required": True},
            "author": {"required": True},
            "cover": {"required": True},
            "file": {"required": True},
            "category_book": {"required": False},
            "title": {"required": True},
            "synopsis": {"required": True},
            "is_published": {"required": False},
            "published_date": {"required": False},
            "number_chapters": {"required": True},
            "number_pages": {"required": True},
            "lenguage": {"required": True},
            "price": {"required": True},
        }

    def get_author_details(self, obj):
        """
        Get the details of the author.
        """
        from apps.profile.serializers import ProfileSerializer

        return (
            ProfileSerializer(obj.author.profile).data if obj.author.profile else None
        )

    def get_cover_details(self, obj):
        """
        Get the details of the cover image.
        """
        from apps.utils.serializers.serializers import ImageSerializer

        return ImageSerializer(obj.cover).data if obj.cover else None

    def get_file_details(self, obj):
        """
        Get the details of the file.
        """
        from apps.utils.serializers.serializers import DocumentSerializer

        return DocumentSerializer(obj.file).data if obj.file else None

    def get_categories(self, obj):
        """
        Get the details of the category book.
        """
        from apps.category.serializers import CategorySerializer

        category_book = CategoryBook.objects.filter(book=obj)
        if not category_book.exists():
            return None

        return [
            CategorySerializer(category.category).data
            for category in category_book
            if category.category
        ]

    def get_in_library(self, obj):
        request = self.context.get("request")
        if request and request.user.is_authenticated:
            from apps.library.models import Item

            return Item.objects.filter(
                book=obj.uid, library=request.user.library
            ).exists()
        return False

    def create(self, validated_data):
        """
        Create a new Book instance.
        """
        book = Book.objects.create(**validated_data)
        return book

    def update(self, instance, validated_data):
        """
        Update an existing Book instance.
        """
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance


class CategoryBookSerializer(AbstractBaseSerializer):
    book = serializers.PrimaryKeyRelatedField(
        queryset=Book.objects.all(), write_only=True
    )
    book_details = serializers.SerializerMethodField()
    category = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), write_only=True
    )
    category_details = serializers.SerializerMethodField()

    class Meta:
        model = CategoryBook
        fields = AbstractBaseSerializer.Meta.fields + [
            "book",
            "book_details",
            "category",
            "category_details",
        ]

    def get_book_details(self, obj):
        from apps.book.serializers import BookSerializer

        return BookSerializer(obj.book).data if obj.book else None

    def get_category_details(self, obj):
        from apps.category.serializers import CategorySerializer

        return CategorySerializer(obj.category).data if obj.category else None
