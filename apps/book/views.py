from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated, AllowAny
from apps.utils.pagination import LargeSetPagination
from apps.utils.views.abstract_views import BaseViewSet
from .serializers import BookSerializer, CategoryBookSerializer
from .models import Book
from .filters import BookFilter
from .mixins import (
    ValidateCategoryForBookMixin,
    ValidateRegisterBookMixin,
    CreateCoverBookMixin,
    CreateFileBookMixin,
    PrepareDataForCategoryBookMixin,
)


class BookViewSet(
    BaseViewSet,
    ValidateCategoryForBookMixin,
    ValidateRegisterBookMixin,
    CreateCoverBookMixin,
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

    class Meta:
        model = Book
        verbose_name = "book"
        verbose_name_plural = "books"

    def get_model(self):
        return self.Meta.model

    def get_permissions(self):
        if self.action == "list":
            return [AllowAny()]

        return super().get_permissions()

    def validate(self, request_data):
        validated_data = self.validate_data(request_data)

        self.validate_categories(validated_data.get("categories"))

        return validated_data

    def create(self, request, *args, **kwargs):
        """
        Create a new book.
        """
    
        
        
        file = request.FILES.pop("file", None)

        try:
            validated_data = self.validate(request.data)
        except ValidationError as e:
            return Response({"error": e.detail}, status=status.HTTP_400_BAD_REQUEST)

        file_object = self.create_file(self, file, validated_data.get("title"))
        cover_object = self.create_cover(
            self, validated_data.get("cover"), validated_data.get("title")
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
                data=self.prepare_data_for_category_book(categories, many=True)
            )
        except ValidationError as e:
            return Response({"detail": e.detail}, status=status.HTTP_400_BAD_REQUEST)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        return Response(
            {"book": self.get_serializer(self.book).data},
            status=status.HTTP_201_CREATED,
        )

    @action(detail=False, methods=["POST"], url_path="validate-isbn")
    def validate_isbn(self, request, pk=None, *args, **kwargs):

        isb = request.data.get("isbn", None)
        if not isb:
            return Response(
                {"error": "ISBN is required."}, status=status.HTTP_400_BAD_REQUEST
            )

        if Book.objects.filter(isbn=isb).exists():
            return Response(
                {"error": "ISBN already exists."}, status=status.HTTP_400_BAD_REQUEST
            )
        return Response(
            {"data": True},
            status=status.HTTP_204_NO_CONTENT,
        )
