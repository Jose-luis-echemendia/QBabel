from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Category
from .serializers import CategorySerializer
from .filters import CategoryFilter
from apps.user.permisions import IsAdminRole
from django_filters.rest_framework import DjangoFilterBackend


class CustomCategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_class = CategoryFilter

    def get_permissions(self):
        if self.request.user and IsAdminRole().has_permission(self.request, self) or self.action == "get":
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

    def perform_create(self, serializer):
        serializer.save()

    def perform_update(self, serializer):
        return serializer.save()

    def get_queryset(self):
        if not self.request.user.is_superuser:
            queryset = self.queryset.filter(gallery__user=self.request.user)
        if "state" not in self.request.GET:
            queryset = self.queryset.filter(is_active=True)
        return queryset
    
    def filter_queryset(self, queryset):
        filterset = self.filterset_class(self.request.GET, queryset=queryset, request=self.request)
        if not filterset.is_valid():
            raise ValueError(f"Invalid filter data: {filterset.errors}")
        queryset = filterset.qs
        return queryset
    
    def order_queryset(self, queryset):
        ordering = self.request.GET.get("ordering", None)
        if ordering:
            queryset = queryset.order_by(*ordering.split(","))
        return queryset

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset(with_parent=True)
        if not queryset:
            return Response(
                {"details": "Categories not found"}, status=status.HTTP_404_NOT_FOUND
            )
        filtered_queryset = self.filter_queryset(queryset)
        ordered_queryset = self.order_queryset(filtered_queryset)
        
        context = self.get_serializer_context()
        context['withparent'] = self.request.query_params.get('withparent', False) 
        data_cateogries = self.get_serializer(ordered_queryset, many=True).data
        return Response({"categories": data_cateogries}, status=status.HTTP_200_OK)

    def create(self, request, *args, **kwargs):
        if not request.user.is_superuser:
            return Response(
                {"detail": "Only superusers can create categories."},
                status=status.HTTP_403_FORBIDDEN,
            )

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def update(self, request, *args, **kwargs):
        request_data = request.data.copy()
        partial = kwargs.pop("partial", False)
        instance = self.get_object()
        self.validate(request_data)
        serializer = self.get_serializer(instance, data=request_data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        return Response(
            serializer.data,
            status=status.HTTP_200_OK,
        )

    def destroy(self, request, *args, **kwargs):
        instance_user = self.get_object()

        if instance_user.is_active:
            return Response(
                {"detail": "This user can not delete becouse he is active."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        instance_user.delete()

        return Response(
            {"message": "user account deleted successfully"},
            status=status.HTTP_204_NO_CONTENT,
        )

    @action(detail=True, methods=["POST"])
    def active(self, request, pk=None, *args, **kwargs):
        instance_user = self.get_object()

        if instance_user.is_active:
            return Response(
                {"detail": "This user is already active."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        instance_user.is_active = True
        instance_user.save()
        return Response(
            {"message": "user account activate successfully"},
            status=status.HTTP_204_NO_CONTENT,
        )

    @action(detail=True, methods=["POST"])
    def desactive(self, request, pk=None, *args, **kwargs):
        instance_user = self.get_object()

        if not instance_user.is_active:
            return Response(
                {"detail": "This user is already inactive."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        instance_user.is_active = False
        instance_user.save()
        return Response(
            {"message": "user account desactive successfully"},
            status=status.HTTP_204_NO_CONTENT,
        )
