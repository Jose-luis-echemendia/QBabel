import random, string
from datetime import datetime, timedelta
from django.utils.text import slugify

def get_format_date(date_type):
    """
    Get the date format string based on the provided date type.

    Args:
        date_type (str): The type of date format required. Can be 'day', 'month', or 'year'.

    Returns:
        str: The corresponding date format string.

    Raises:
        ValueError: If the provided date type is not 'day', 'month', or 'year'.
    """
    format_date = {
        "day": "%Y-%m-%d",
        "month": "%Y-%m",
        "year": "%Y"
    }
    format_str = format_date.get(date_type)
    if format_str is None:
        raise ValueError(f"Invalid date type: {date_type}. Expected 'day', 'month', or 'year'.")
    
    return format_str

def add_months(source_date, months):
    month = source_date.month - 1 + months
    year = source_date.year + month // 12
    month = month % 12 + 1
    day = min(source_date.day, (datetime(year, month + 1, 1) - timedelta(days=1)).day)
    return datetime(year, month, day)

def subtract_months(source_date, months):
    return add_months(source_date, -months)


def generate_random_string(size=12):
    """Generate a random sized string using Upper and Lower case letters and digits"""
    return ''.join(random.choices(string.ascii_lowercase + string.ascii_uppercase + string.digits, k=size))


def generate_filename(filename, prefix=None):
    if not filename:
        return filename

    ext = filename.split(".")[-1]
    if prefix:
        return "{prefix}_{name}.{ext}".format(prefix=prefix, name=generate_random_string(8), ext=ext)
    else:
        return "{name}.{ext}".format(name=generate_random_string(8), ext=ext)

def generate_unique_slug(instance, field_value, slug_field_name='slug', max_length=50):
    """
    Genera un slug único para el modelo dado.
    :param instance: El modelo que está guardando.
    :param field_value: El valor del campo que será utilizado para generar el slug.
    :param slug_field_name: El nombre del campo slug en el modelo.
    :param max_length: Longitud máxima del slug.
    :return: Un slug único.
    """
    # Convertir el valor del campo en un slug inicial
    slug = slugify(field_value)[:max_length]
    slug_base = slug

    # Asegurar que el slug es único
    ModelClass = instance.__class__
    unique_slug = slug
    counter = 1

    while ModelClass.objects.filter(**{slug_field_name: unique_slug}).exists():
        # Si el slug no es único, agregar un sufijo de números/alfanúmericos
        random_suffix = ''.join(random.choices(string.ascii_lowercase + string.digits, k=4))
        unique_slug = f"{slug_base}-{random_suffix}"
        
        # En caso de exceder la longitud máxima, cortar el slug base
        if len(unique_slug) > max_length:
            unique_slug = unique_slug[:max_length - 5]  # Ajustar por el sufijo y el guión
    
    return unique_slug

def convertir_a_snake_case(texto):
    return texto.replace(" ", "_")

def desconvertir_de_snake_case(texto):
    return texto.replace("_", " ").title()
