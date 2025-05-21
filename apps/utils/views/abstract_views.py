from rest_framework import status, viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend
from abc import ABC, abstractmethod
from typing import Any
from ..pagination import MediumSetPagination


class BaseView(ABC):
    queryset = None
    serializer_class = None
    pagination_class = MediumSetPagination
    permission_classes = []
    filter_backends = [DjangoFilterBackend]
    filterset_class = None
    lookup_field = "uid"
    ordering_fields = ["created_at"]
    ordering = ["-created_at"]

    class Meta:
        model = None
        verbose_name = None
        verbose_name_plural = None

    @abstractmethod
    def get_model(self):
        raise NotImplementedError("You must override get_model to specify the model.")

    def get_verbose_name(self):
        # Si no se define en Meta, se puede obtener desde el modelo
        if self.Meta.verbose_name is not None:
            return self.Meta.verbose_name
        return self.get_model()._meta.verbose_name

    def get_verbose_name_plural(self):
        # Si no se define en Meta, se puede obtener desde el modelo
        if self.Meta.verbose_name_plural is not None:
            return self.Meta.verbose_name_plural
        return self.get_model()._meta.verbose_name_plural

    def get_pagination(self):
        return self.pagination_class()

    def perform_create(self, serializer):
        return serializer.save()

    def perform_update(self, serializer):
        return serializer.save()

    def perform_destroy(self, instance):
        instance.delete()

    def get_serializer(self, *args, **kwargs):
        """
        Get the serializer class to use for serialization.
        """
        return self.serializer_class(*args, **kwargs)

    def validate(self, request_data) -> dict[str, Any]:
        raise NotImplementedError(
            "You must override validate to specify the logic of validation."
        )

    def get_queryset(self):

        queryset = self.get_model().base_objects.all_objects()
        from apps.user.permisions import IsAdminRole, IsSuperUserRole

        if (
            "state" not in self.request.GET
            and not IsAdminRole().has_permission(self.request, self)
            and not IsSuperUserRole().has_permission(self.request, self)
        ):
            queryset = self.get_model().base_objects.active_objects()
        return queryset

    def filter_queryset(self, queryset):
        filterset = self.filterset_class(
            self.request.GET, queryset=queryset, request=self.request
        )
        if filterset.is_valid():
            return filterset.qs
        return queryset

    def order_queryset(self, queryset):
        ordering = self.request.GET.get("ordering", None)
        if ordering:
            queryset = queryset.order_by(*ordering.split(","))
        return queryset

    def get_object(self, *args, **kwargs):
        """
        Retrieve the instance based on the provided ID.
        """
        lookup_value = self.kwargs.get(self.lookup_field)

        # Buscar el objeto usando el lookup_field correcto
        obj = get_object_or_404(self.get_model(), **{self.lookup_field: lookup_value})
        self.check_object_permissions(self.request, obj)
        return obj

    # ENDOINTS -> CRUD
    def get_objects(self, request, instances=None, *args, **kwargs):
        try:
            queryset = self.get_queryset()
        except Exception as e:
            return Response(
                {"detail": f"an unexpected error occurred: {e.detail}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

        if not queryset.exists():
            return Response(
                {"detail": f"not {self.get_verbose_name_plural()} found"},
                status=status.HTTP_404_NOT_FOUND,
            )
        filtered_queryset = self.filter_queryset(
            queryset if instances is None else instances
        )
        ordered_queryset = self.order_queryset(filtered_queryset)
        paginator = MediumSetPagination()
        results = paginator.paginate_queryset(ordered_queryset, request)
        serialized_data = self.get_serializer(results, many=True).data
        return paginator.get_paginated_response(
            {self.get_verbose_name_plural(): serialized_data}
        )

    def retrive_object(self, request, uid=None, object=None, *args, **kwargs):
        instance = self.get_object(*args, **kwargs) if object is None else object
        serialized_data = self.get_serializer(instance).data
        return Response(
            {self.get_verbose_name(): serialized_data}, status=status.HTTP_200_OK
        )

    def create_object(self, request, data=None, *args, **kwargs):
        serializer = self.get_serializer(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {self.get_verbose_name(): serializer.data}, status=status.HTTP_201_CREATED
        )

    def update_object(self, request, data=None, partial=False, *args, **kwargs):
        instance = self.get_object(*args, **kwargs)
        serializer = self.get_serializer(
            instance,
            data=request.data.copy() if not data else data,
            partial=partial,
            context={"request": request},
        )
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(
            {self.get_verbose_name(): serializer.data}, status=status.HTTP_200_OK
        )

    def delete_object(self, request, *args, **kwargs):
        instance = self.get_object(*args, **kwargs)

        if instance.is_active:
            return Response(
                {
                    "detail": f"This {self.get_verbose_name()} can not delete becouse he is active."
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        self.perform_destroy(instance)

        return Response(
            {"message": f"{self.get_verbose_name()} deleted successfully"},
            status=status.HTTP_204_NO_CONTENT,
        )

    def active_object(self, request, pk=None, *args, **kwargs):
        instance = self.get_object(*args, **kwargs)

        if instance.is_active:
            return Response(
                {"detail": f"This {self.get_verbose_name()} is already active."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        instance.is_active = True
        instance.save()
        serialized_data = self.get_serializer(instance).data

        return Response(
            {
                "message": f"{self.get_verbose_name()} object activate successfully",
                f"{self.get_verbose_name()}": serialized_data,
            },
            status=status.HTTP_205_RESET_CONTENT,
        )

    def desactive_object(self, request, pk=None, *args, **kwargs):
        instance = self.get_object(*args, **kwargs)

        if not instance.is_active:
            return Response(
                {"detail": f"This {self.get_verbose_name()} is already inactive."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        instance.is_active = False
        instance.save()
        return Response(
            {"message": f"{self.get_verbose_name()} object desactive successfully"},
            status=status.HTTP_204_NO_CONTENT,
        )


class BaseViewSet(BaseView, viewsets.ModelViewSet):

    def get_permissions(self):
        return super().get_permissions()

    def retrieve(self, request, uid=None, *args, **kwargs):
        return self.retrive_object(request, *args, **kwargs)

    def list(self, request, *args, **kwargs):
        return self.get_objects(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        return self.create_object(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        return self.update_object(
            request, partial=kwargs.pop("partial", False), *args, **kwargs
        )

    def destroy(self, request, *args, **kwargs):
        return self.delete_object(request, *args, **kwargs)

    @action(detail=True, methods=["POST"])
    def active(self, request, uid=None, *args, **kwargs):
        return self.active_object(request, *args, **kwargs)

    @action(detail=True, methods=["POST"])
    def desactive(self, request, uid=None, *args, **kwargs):
        return self.desactive_object(request, *args, **kwargs)


class BaseAPIView(BaseView, APIView):

    def get_permissions(self):
        return super().get_permissions()

    def get(self, request, uid=None, *args, **kwargs):
        if uid is None:
            return self.get_objects(request)
        return self.retrive_object(request, pk=uid)

    def post(self, request, *args, **kwargs):
        return self.create_object(request)

    def put(self, request, *args, **kwargs):
        return self.update_object(request)

    def patch(self, request, *args, **kwargs):
        return self.update_object(request, partial=True)

    def delete(self, request, *args, **kwargs):
        return self.delete_object(request)


class BaseCustomAPIView(BaseView, APIView):

    def get_permissions(self):
        return super().get_permissions()

    def get(self, request, uid=None, *args, **kwargs):
        return Response(
            {"detail": 'Method "GET" not allowed.'},
            status=status.HTTP_405_METHOD_NOT_ALLOWED,
        )

    def post(self, request, *args, **kwargs):
        return Response(
            {"detail": 'Method "POST" not allowed.'},
            status=status.HTTP_405_METHOD_NOT_ALLOWED,
        )

    def put(self, request, *args, **kwargs):
        return Response(
            {"detail": 'Method "PUT" not allowed.'},
            status=status.HTTP_405_METHOD_NOT_ALLOWED,
        )

    def patch(self, request, *args, **kwargs):
        return Response(
            {"detail": 'Method "PATCH" not allowed.'},
            status=status.HTTP_405_METHOD_NOT_ALLOWED,
        )

    def delete(self, request, *args, **kwargs):
        return Response(
            {"detail": 'Method "DELETE" not allowed.'},
            status=status.HTTP_405_METHOD_NOT_ALLOWED,
        )
