from django.core.exceptions import ValidationError
from django.utils.translation import gettext as _

def validate_password_strength(value, user_name=None):
    if len(value) < 8:
        raise ValidationError(_('La contraseña debe tener al menos 8 caracteres.'))
    if not any(char.isdigit() for char in value):
        raise ValidationError(_('La contraseña debe contener al menos un número.'))
    if not any(char.isalpha() for char in value):
        raise ValidationError(_('La contraseña debe contener al menos una letra.'))
    if not any(char in '!@#$%^&*()_+.' for char in value):
        raise ValidationError(_('La contraseña debe contener al menos un carácter especial.'))
    if user_name and user_name.lower() in value.lower():
        raise ValidationError(_('La contraseña no debe ser similar al nombre de usuario.'))