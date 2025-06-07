from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.parsers import MultiPartParser, FormParser
from apps.utils.views.abstract_views import BaseViewSet, BaseCustomAPIView
from apps.utils.mixins import CreateImageMixin
from apps.utils.pagination import LargeSetPagination, MediumSetPagination
from .serializers import BookSerializer, CategoryBookSerializer
from .models import Book, CategoryBook
from .filters import BookFilter
from .mixins import (
    ValidateCategoryForBookMixin,
    ValidateRegisterBookMixin,
    CreateFileBookMixin,
    PrepareDataForCategoryBookMixin,
)


class BookViewSet(
    BaseViewSet,
    ValidateCategoryForBookMixin,
    ValidateRegisterBookMixin,
    CreateImageMixin,
    CreateFileBookMixin,
    PrepareDataForCategoryBookMixin,
):
    """
    View to handle book requests.
    """

    queryset = Book.objects.all()
    book = None
    serializer_class = BookSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = LargeSetPagination
    filterset_class = BookFilter
    parser_classes = (MultiPartParser, FormParser)

    class Meta:
        model = Book
        verbose_name = "book"
        verbose_name_plural = "books"

    def get_model(self):
        return self.Meta.model

    def get_permissions(self):
        if self.action in ["list", "retrieve"]:
            return [AllowAny()]

        return super().get_permissions()

    def validate(self, request_data):
        validated_data = self.validate_data(request_data)

        self.validate_categories(validated_data.get("categories"))

        return validated_data

    def get_pagination(self):
        if self.request.query_params.get("me", None):
            return MediumSetPagination()
        elif self.request.query_params.get("title", None):
            from .pagination import SearchSetPagination

            return SearchSetPagination()

        return super().get_pagination()

    def create(self, request, *args, **kwargs):
        """
        Create a new book.
        """

        file = request.FILES.get("file", None)

        try:
            validated_data = self.validate(request.data)
        except ValidationError as e:
            return Response({"error": e.detail}, status=status.HTTP_400_BAD_REQUEST)

        file_object = self.create_file(file, validated_data.get("title"))

        from apps.utils.enums import ImageTypes

        cover_object = self.create_image(
            data={
                "image": validated_data.get("cover"),
                "name": validated_data.get("title"),
                "caption": validated_data.get("title"),
                "registered_by": self.request.user.pk,
                "type": ImageTypes.cover,
            }
        )
        # validated_data["author"] = self.request.user.pk
        validated_data["file"] = file_object.pk
        validated_data["cover"] = cover_object.pk
        categories = validated_data.pop("categories")

        # CREATE INSTANCE BOOK
        serializer = self.get_serializer(data=validated_data)
        serializer.is_valid(raise_exception=True)
        self.book = self.perform_create(serializer)

        # CREATE INSTANCES CATEOGRIES BOOKS
        try:
            serializer = CategoryBookSerializer(
                data=self.prepare_data_for_category_book(categories), many=True
            )
        except ValidationError as e:
            return Response({"detail": e.detail}, status=status.HTTP_400_BAD_REQUEST)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        return Response(
            {"book": self.get_serializer(self.book).data},
            status=status.HTTP_201_CREATED,
        )

    def update(self, request, *args, **kwargs):
        book = self.get_object(*args, **kwargs)
        data = {}

        categories = request.data.getlist("categories", None)

        if categories:
            self.validate_categories(categories)
            CategoryBook.objects.filter(book=book.uid).update(is_active=False)

            for cat_id in categories:
                CategoryBook.objects.update_or_create(
                    book=book,
                    category_id=cat_id,
                    defaults={"is_active": True},
                )

        file = request.FILES.get("file", None)
        if file:
            file_object = self.create_file(file, request.data.get("title", book.title))
            data["file"] = file_object.pk

        cover = request.data.get("cover", None)
        if cover:
            from apps.utils.enums import ImageTypes

            cover_object = self.create_image(
                data={
                    "image": cover,
                    "name": request.data.get("title", book.title),
                    "caption": request.data.get("title", book.title),
                    "registered_by": self.request.user.pk,
                    "type": ImageTypes.cover,
                }
            )
            data["cover"] = cover_object.pk

        data["title"] = request.data.get("title")
        data["synopsis"] = request.data.get("synopsis", None)
        data["number_chapters"] = request.data.get("number_chapters", None)
        data["number_pages"] = request.data.get("number_pages", None)
        data["lenguage"] = request.data.get("lenguage", None)
        data["price"] = request.data.get("price", None)
        data["is_published"] = request.data.get("is_published", False)

        return self.update_object(request, data=data, partial=True, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.desactive_object(request, *args, **kwargs)

    @action(detail=False, methods=["POST"], url_path="validate-isbn")
    def validate_isbn(self, request, pk=None, *args, **kwargs):

        isbn = request.data.get("isbn", None)
        if not isbn:
            return Response(
                {"error": "ISBN is required."}, status=status.HTTP_400_BAD_REQUEST
            )

        if Book.objects.filter(isbn=isbn).exists():
            return Response(
                {"error": "ISBN already exists."}, status=status.HTTP_400_BAD_REQUEST
            )
        return Response(
            {"data": True},
            status=status.HTTP_204_NO_CONTENT,
        )


class GetBooksHomeView(BaseCustomAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = LargeSetPagination
    filterset_class = BookFilter

    class Meta:
        model = Book
        verbose_name = "book"
        verbose_name_plural = "books"

    def get_model(self):
        return self.Meta.model

    def get_limited_books(self, queryset):
        count = queryset.count()
        if count >= 32:
            return queryset[:32]
        elif count >= 16:
            return queryset[:16]
        elif count >= 8:
            return queryset[:8]
        return queryset

    def get(self, request, *args, **kwargs):
        """
        libros a obtener:
            => fantasía
            => romance
            => Mejores selecciones
            => comedia
            => historias gratis
            => tus lecturas actuales
            => historias de escritores recientes
        """

        user = request.user

        def get_books_by_category(name):
            return (
                Book.objects.filter(
                    category_book__category__name__iexact=name, is_published=True
                )
                .order_by("-created_at")
                .distinct()
            )

        def get_most_read_books():
            return Book.objects.filter(is_published=True).order_by("-count_reads")[:32]

        def get_free_books():
            return Book.objects.filter(price=0.00, is_published=True).order_by(
                "-created_at"
            )

        def get_user_current_reads():
            return Book.objects.filter(
                items__library__user=user, is_published=True
            ).order_by("-created_at")

        def get_recent_authors_books():
            from django.utils import timezone
            from datetime import timedelta

            recent_days = timezone.now() - timedelta(days=30)
            return (
                Book.objects.filter(
                    author__books__created_at__gte=recent_days, is_published=True
                )
                .order_by("-created_at")
                .distinct()
            )

        data = {
            "fantasy": self.serializer_class(
                self.get_limited_books(get_books_by_category("Fantasía")), many=True
            ).data,
            "romance": self.serializer_class(
                self.get_limited_books(get_books_by_category("Romance")), many=True
            ).data,
            "top_picks": self.serializer_class(
                self.get_limited_books(get_most_read_books()), many=True
            ).data,
            "comedy": self.serializer_class(
                self.get_limited_books(get_books_by_category("Comedia")), many=True
            ).data,
            "free_books": self.serializer_class(
                self.get_limited_books(get_free_books()), many=True
            ).data,
            "your_library": self.serializer_class(
                self.get_limited_books(get_user_current_reads()), many=True
            ).data,
            "new_authors": self.serializer_class(
                self.get_limited_books(get_recent_authors_books()), many=True
            ).data,
        }

        return Response(data)


class GetBooksTopSellerFromCategoryView(BaseCustomAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    permission_classes = [IsAuthenticated]
    filterset_class = BookFilter

    class Meta:
        model = Book
        verbose_name = "book"
        verbose_name_plural = "books"

    def get_model(self):
        return self.Meta.model

    def get(self, request, category, *args, **kwargs):
        # Obtiene la categoría del parámetro URL
        category = self.kwargs.get("category")

        # Aplica el filtro de top vendidos
        queryset = self.get_queryset()
        queryset = BookFilter().filter_top_selling_by_category(
            queryset=queryset, value=category, name="top_selling"
        )
        return Response(
            {"books": self.get_serializer(queryset, many=True).data},
            status=status.HTTP_200_OK,
        )


class ReadBookView(BaseCustomAPIView):
    queryset = Book.objects.all()
    book = None
    serializer_class = BookSerializer
    permission_classes = [AllowAny]
    pagination_class = LargeSetPagination
    filterset_class = BookFilter
    parser_classes = (MultiPartParser, FormParser)

    class Meta:
        model = Book
        verbose_name = "book"
        verbose_name_plural = "books"

    def get_model(self):
        return self.Meta.model

    def get(self, request, *args, **kwargs):
        book = self.get_object(*args, **kwargs)
        pass
