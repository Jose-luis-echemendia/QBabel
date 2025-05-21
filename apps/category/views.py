from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.parsers import MultiPartParser, FormParser
from django_filters.rest_framework import DjangoFilterBackend
from apps.user.permisions import IsAdminRole
from apps.utils.views.abstract_views import BaseViewSet
from .models import Category
from .serializers import CategorySerializer
from .filters import CategoryFilter
from .mixins import CreateImageCategoryMixin


class CustomCategoryViewSet(BaseViewSet, CreateImageCategoryMixin):
    queryset = Category.objects.all()
    parser_classes = [MultiPartParser, FormParser]
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_class = CategoryFilter
    
    class Meta:
        model = Category
        verbose_name = "category"
        verbose_name_plural = "categories"

    def get_model(self):
        return self.Meta.model

    def get_permissions(self):
        if self.action == "list":
            return [AllowAny()]

        if not IsAuthenticated().has_permission(self.request, self):
            return super().get_permissions()

        if (
            self.request.user
            and IsAdminRole().has_permission(self.request, self)
            or self.request.method == "GET"
        ):
            return [AllowAny()]

        if self.action in [
            "create",
            "update",
            "partial_update",
            "destroy",
            "retrieve",
        ]:
            return [IsAdminRole()]

        return super().get_permissions()

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        if not queryset:
            return Response(
                {"details": "Categories not found"}, status=status.HTTP_404_NOT_FOUND
            )
        filtered_queryset = self.filter_queryset(queryset)
        ordered_queryset = self.order_queryset(filtered_queryset)
        context = self.get_serializer_context()
        context["withparent"] = self.request.query_params.get("withparent", False)
        date_categories = self.get_serializer(
            ordered_queryset, many=True, context=context
        ).data
        return Response({"categories": date_categories}, status=status.HTTP_200_OK)
 
    def create(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            return Response(
                {"detail": "Only superusers can create categories."},
                status=status.HTTP_403_FORBIDDEN,
            )

        image_file = request.FILES.get("img", None)
        category_name = request.data.get("name", None)

        if not category_name:
            return Response(
                {"detail": "Category name is required."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if not image_file:
            return Response(
                {"detail": "Image file is required."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        from apps.utils.enums import ImageTypes

        image = self.create_image(
            data={
                "image": image_file,
                "name": category_name,
                "caption": category_name,
                "registered_by": self.request.user.pk,
                "type": ImageTypes.category,
            }
        )

        serializer = self.get_serializer(
            data={
                "name": category_name,
                "image": image.pk,
                "description": request.data.get("description", None),
                "registered_by": self.request.user.pk,
                # "parent": request.data.get("parent", None),
            }
        )

        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def update(self, request, *args, **kwargs):
        request_data = request.data.copy()
        image_file = request.FILES.get("image", None)
        partial = kwargs.pop("partial", False)
        instance = self.get_object()

        if image_file:
            from apps.utils.enums import ImageTypes

            image = self.create_image(
                data={
                    "image": image_file,
                    "name": instance.name,
                    "caption": instance.name,
                    "registered_by": self.request.user.pk,
                    "type": ImageTypes.category,
                }
            )
            request_data["image"] = image.pk

        request_data["updated_by"] = self.request.user.pk
        serializer = self.get_serializer(instance, data=request_data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        return Response(
            serializer.data,
            status=status.HTTP_200_OK,
        )



