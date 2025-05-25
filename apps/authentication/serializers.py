# serializers.py
from rest_framework import serializers


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(
        error_messages={
            "required": "Todos los campos son obligatorios",
            "invalid": "Ha introducido datos incorrecots. Formato de email inválido",
        }
    )
    password = serializers.CharField(
        error_messages={"required": "Todos los campos son obligatorios"}
    )
