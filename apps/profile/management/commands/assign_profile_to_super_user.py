from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from apps.profile.models import Profile
from apps.utils.models.models import GenericImage

User = get_user_model()


class Command(BaseCommand):
    """
    Command to assign the default avatar image to the superuser's profile.
    """

    help = "Assign default avatar image to superuser profile"

    def handle(self, *args, **options):
        try:
            # Obtener superusuario
            superuser = User.objects.filter(is_superuser=True).first()
            if not superuser:
                self.stdout.write(self.style.WARNING("No superuser found."))
                return

            # Obtener el avatar por defecto
            avatar_uuid = GenericImage.DEFAULT_AVATAR_IMAGE_UUID
            try:
                default_avatar = GenericImage.objects.get(uid=avatar_uuid)
            except GenericImage.DoesNotExist:
                self.stdout.write(
                    self.style.ERROR(
                        f"Default avatar with UUID {avatar_uuid} does not exist."
                    )
                )
                return

            # Obtener o crear perfil del superusuario
            profile, created = Profile.objects.get_or_create(user=superuser)
            profile.avatar = default_avatar
            profile.save()

            if created:
                self.stdout.write(
                    self.style.SUCCESS("Profile created and default avatar assigned.")
                )
            else:
                self.stdout.write(
                    self.style.SUCCESS("Default avatar assigned to existing profile.")
                )

        except Exception as e:
            self.stderr.write(
                self.style.ERROR(f"Error assigning default avatar: {str(e)}")
            )
