from apps.user.decorator import limit_daily_spending
from apps.utils.helpers import CalculateSpent
from apps.gallery.models import Gallery
from apps.services.managers.image_generator import ImageGeneratorManager
from .serializers import EmoteSerializer
from .models import Emote
from .filters import EmoteFilter
from apps.utils.enums import GeneratedImageQualityTypes
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import ValidationError
from django_filters.rest_framework import DjangoFilterBackend
from django.db import transaction
from apps.utils.pagination import MediumSetPagination

               
class EmoteView(APIView):
    """
    view to handle emotes requested by the user
    """
    serializer_class = EmoteSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_class = EmoteFilter
    ordering_fields = ["created_at", "quality", "count_download", "count_images"]  
    ordering = ["created_at"]

    def get_queryset(self):
        queryset = Emote.objects.all()
        if not self.request.user.is_superuser:
            queryset = queryset.filter(gallery__user=self.request.user)
        if "state" not in self.request.GET:
            queryset = queryset.filter(is_active=True)
        return queryset

    def perform_create(self, serializer):
        return serializer.save()

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
        """
        endpoint to get all emotes of the authenticated user
        """
        queryset = self.get_queryset()
        if not queryset.exists():
            return Response(
                {"details": "not emotes found"}, status=status.HTTP_404_NOT_FOUND
            )
            
        filtered_queryset = self.filter_queryset(queryset)
        ordered_queryset = self.order_queryset(filtered_queryset)
        paginator = MediumSetPagination()
        results = paginator.paginate_queryset(ordered_queryset, request)
        emotes_data = self.serializer_class(results, many=True).data
        return paginator.get_paginated_response({"emotes": emotes_data})
            
    @limit_daily_spending()
    def post(self, request, *args, **kwargs):
        """
        Endpoint to generate the user's emote.
        """
        request_data = request.data.copy()

        try:
            # Verificar campo 'quality'
            if not request_data.get("quality", False):
                return Response(
                    {"details": "quality field is required"},
                    status=status.HTTP_400_BAD_REQUEST,
                )

            if request_data.get("quality") not in [
                GeneratedImageQualityTypes.hd,
                GeneratedImageQualityTypes.standard,
            ]:
                return Response(
                    {
                        "details": "quality field '{}' is not one of ['standard', 'hd']".format(
                            request_data.get("quality")
                        )
                    },
                    status=status.HTTP_400_BAD_REQUEST,
                )

            # Verificar campo 'gallery' y asignarlo si no existe
            if not request_data.get("gallery", False):
                try:
                    gallery = Gallery.objects.get(user=request.user)
                    request_data["gallery"] = gallery.pk
                except Gallery.DoesNotExist:
                    return Response(
                        {"details": "Gallery not found for user."},
                        status=status.HTTP_404_NOT_FOUND,
                    )

            # Validar y serializar los datos
            serializer = self.serializer_class(data=request_data)
            serializer.is_valid(raise_exception=True)

            # Procesar creación de emote con transacción atómica
            with transaction.atomic():
                emote = self.perform_create(serializer)
                image_manage = ImageGeneratorManager(
                    user=request.user,
                    image_object=emote,
                    quality=request_data["quality"],
                )
                try:
                    image_manage.process_images()
                except Exception as e:
                    return Response(
                        {"details": f"Error processing emote images: {str(e)}"},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR,
                    )

            CalculateSpent.calculateSpent(image_object=emote, quality=request_data["quality"])
            return Response({"emote": serializer.data}, status=status.HTTP_201_CREATED)

        except ValidationError as e:
            # Si hay un error de validación de datos
            return Response({"details": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            # Captura errores no esperados
            return Response(
                {"details": f"Unexpected error: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

