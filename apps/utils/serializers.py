from rest_framework import serializers
from .models.models import GenericImage
from django.contrib.auth import get_user_model
from rest_framework.exceptions import ValidationError
from apps.user.serializers import UserCreateSerializer
import logging

# Configurar un logger
logger = logging.getLogger(__name__)
User = get_user_model()


class AbstractBaseSerializer(serializers.ModelSerializer):
    uid = serializers.UUIDField(required=False)
    slug = serializers.SlugField(required=False)
    updated_at = serializers.DateTimeField(required=False)
    created_at = serializers.DateTimeField(required=False)

    class Meta:
        abstract = True
        fields = ["uid", "slug", "created_at", "updated_at"]
        read_only_fields = ("uid", "slug", "created_at", "updated_at")


class AuditUserChangeSerializer(serializers.ModelSerializer):
    created_by = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), write_only=True, required=False
    )
    updated_by = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), required=False, write_only=True
    )
    created_by_details = serializers.SerializerMethodField()
    updated_by_details = serializers.SerializerMethodField()

    class Meta:
        abstract = True
        fields = [
            "created_by",
            "updated_by",
            "created_by_details",
            "updated_by_details",
        ]
        
    def get_created_by_details(self, obj):
        return UserCreateSerializer(obj.created_by).data if obj.created_by else None

    def get_updated_by_details(self, obj):
        return UserCreateSerializer(obj.updated_by).data if obj.updated_by else None

    def create(self, validated_data):
        if not validated_data.get("created_by"): 
            user = self.context["request"].user
            validated_data["created_by"] = user
        return super().create(validated_data)


    def update(self, instance, validated_data):
        if not validated_data.get("updated_by"):
            user = self.context["request"].user
            instance.updated_by = user

        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        instance.save()
        return instance

class ImageSerializer(AbstractBaseSerializer):
    registered_by = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = GenericImage
        fields = AbstractBaseSerializer.Meta.fields + [
            "alt",
            "title",
            "order",
            "type",
            "image",
            "registered_by",
        ]

    def validate_type(self, value):
        """
        Asegura que solo usuarios superusuarios puedan crear imágenes de ciertos tipos.
        """
        return value

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation["registered_by"] = str(representation["registered_by"])
        return representation

    def create(self, validated_data):
        try:
            # Crear una instancia del modelo
            instance = GenericImage(**validated_data)

            # Guardar la instancia con el usuario proporcionado en el contexto
            instance.save(user=self.context.get("user"))

            return instance

        except KeyError as e:
            # Error si falta una clave esperada en validated_data o contexto
            logger.error(f"Error de clave: {str(e)}")
            raise ValidationError(f"Falta una clave requerida: {str(e)}")

        except ValueError as e:
            # Error en los valores proporcionados (tipo de dato incorrecto, etc.)
            logger.error(f"Error de valor: {str(e)}")
            raise ValidationError(f"Valor incorrecto proporcionado: {str(e)}")

        except Exception as e:
            # Capturar cualquier otro tipo de error inesperado
            logger.critical(f"Error al crear la imagen: {str(e)}", exc_info=True)
            raise ValidationError(
                "Failed to create image. Please check the logs for more details."
            )
