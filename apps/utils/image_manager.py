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
    if instance.is_avatar:
        path = f"users/avatar/{name}"
    elif instance.is_emote:
        path = f"emotes/{name}"
    elif instance.is_style_emote_component:
        path = f"category/emote/estyles/{name}"
    elif instance.is_color_palette_emote_component:
        path = f"category/emote/color_palettes/{name}"
    elif instance.is_expression_emote_component:
        path = f"category/emote/expressions/{name}"
    elif instance.is_base_emote_component:
        path = f"category/emote/bases/{name}"
    elif instance.is_accessory_emote_component:
        path = f"category/emote/accessories/{name}"
    elif instance.is_primary_color_emote_component:
        path = f"category/emote/primary_color/{name}"
    elif instance.is_secondary_color_emote_component:
        path = f"category/emote/secondary_color/{name}"
    elif instance.is_actions_emote_component:
        path = f"category/emote/actions/{name}"
    elif instance.is_presentation_gallery:
        path = f"gallery/presentation/{name}"
    return path


def optimize_image(image_file):
    """
    Optimizes an image by converting it to JPEG format and adjusting its quality.

    Args:
        image_file (File): The original image file to be optimized.

    Returns:
        File: The optimized image file with reduced size.
    """
    # Abre la imagen original
    image = Image.open(image_file)

    # Convertir la imagen a RGB para asegurar el formato JPEG
    image = image.convert("RGB")

    # Crear un buffer de memoria para la imagen optimizada
    image_io = BytesIO()

    # Guardar la imagen en el buffer en formato JPEG
    image.save(image_io, format="JPEG", quality=100, optimize=True, progressive=True)

    # Crear un nuevo archivo ContentFile para la imagen optimizada
    optimized_image = ContentFile(image_io.getvalue(), name=image_file.name)

    return optimized_image
