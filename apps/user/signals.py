from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model
from apps.profile.models import Profile
from apps.library.models import Library
from apps.utils.models.models import GenericImage

User = get_user_model()


@receiver(post_save, sender=User)
def post_save_user_create_create_profile(sender, instance, created, *args, **kwargs):
    if created:
        try:
            Profile.objects.create(
                user=instance,
                avatar=GenericImage.objects.get(
                    pk=GenericImage.DEFAULT_AVATAR_IMAGE_UUID
                ),
            )
        except GenericImage.DoesNotExist as e:
            print(f"Default avatar image not found: {e}")

        Library.objects.create(user=instance)
