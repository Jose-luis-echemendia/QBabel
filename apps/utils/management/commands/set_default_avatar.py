from django.core.management.base import BaseCommand
from django.core.files import File
from pathlib import Path
from apps.utils.models.models import GenericImage


class Command(BaseCommand):
    help = "Crea una imagen por defecto y escribe su UUID en el .env"

    def handle(self, *args, **kwargs):
        # Ruta de la imagen base (ajusta si es diferente)
        image_path = (
            Path(__file__).resolve().parent.parent.parent.parent.parent
            / "core"
            / "media"
            / "avatar_default.png"
        )

        if not image_path.exists():
            self.stderr.write(self.style.ERROR(f"Imagen no encontrada: {image_path}"))
            return

        # Crea el objeto GenericImage si no existe
        with open(image_path, "rb") as f:
            django_file = File(f)
            image_instance = GenericImage.objects.create(image=django_file)

        # UUID
        image_uuid = str(image_instance.uid)
        self.stdout.write(
            self.style.SUCCESS(f"Se creó la imagen con UUID: {image_uuid}")
        )

        # Actualiza .env
        env_path = (
            Path(__file__).resolve().parent.parent.parent.parent.parent
            / "core"
            / "settings"
            / ".env"
        )

        if not env_path.exists():
            env_path.write_text("")

        lines = env_path.read_text().splitlines()
        updated = False
        new_lines = []

        for line in lines:
            if line.startswith("DEFAULT_AVATAR_IMAGE_UUID="):
                new_lines.append(f"DEFAULT_AVATAR_IMAGE_UUID={image_uuid}")
                updated = True
            else:
                new_lines.append(line)

        if not updated:
            new_lines.append(f"DEFAULT_AVATAR_IMAGE_UUID={image_uuid}")

        env_path.write_text("\n".join(new_lines) + "\n")
        self.stdout.write(self.style.SUCCESS(f"Archivo .env actualizado con UUID"))
