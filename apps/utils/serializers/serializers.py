from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework.exceptions import ValidationError
from .abstract_serializers import AbstractBaseSerializer
from ..models.models import GenericImage, GenericDocument
import logging

# Configurar un logger
logger = logging.getLogger(__name__)
User = get_user_model()

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


class DocumentSerializer(AbstractBaseSerializer):
    registered_by = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = GenericDocument
        fields = AbstractBaseSerializer.Meta.fields + [
            "title",
            "description",
            "file",
            "type",
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
            instance = GenericDocument(**validated_data)

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