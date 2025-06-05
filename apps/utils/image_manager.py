from django.core.files.base import ContentFile
from .utils import generate_filename
from io import BytesIO
from PIL import Image


def upload_generic_image(instance, filename):
    """
    Method responsible for organizing generic images on the server.

    Args:
        instance (GenericImage): The instance of the GenericImage model.
        filename (str): The original filename of the uploaded image.

    Returns:
        str: The path where the image will be stored on the server.
    """
    name = generate_filename(filename, "emote")
    path = f"images/{name}"
    if instance.is_cover:
        path = f"libros/{name}"
    elif instance.is_avatar:
        path = f"avatar/{name}"
    elif instance.is_category:
        path = f"category/{name}"

    return path


def optimize_image(image_file):
    """
    Optimiza una imagen convirtiéndola a JPEG, excepto si es GIF (para conservar animaciones).
    """
    try:
        # Asegura que el archivo se lea desde el inicio
        image_file.seek(0)
        image = Image.open(image_file)

        # Si es GIF, retorna el archivo original sin cambios
        if image.format == "GIF":
            image_file.seek(0)  # Reinicia el puntero del archivo
            return image_file

        # Proceso de optimización para otros formatos
        image = image.convert("RGB")
        image_io = BytesIO()

        # Guarda en JPEG con calidad alta
        image.save(
            image_io, format="JPEG", quality=100, optimize=True, progressive=True
        )

        # Crea un nuevo ContentFile con el mismo nombre
        optimized_image = ContentFile(image_io.getvalue(), name=image_file.name)

        return optimized_image

    except Exception as e:
        # Manejo básico de errores (opcional: añade logs)
        return image_file

    finally:
        image_file.seek(0)  # Asegura reinicio del puntero
