from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model
from apps.profile.models import Profile
from apps.library.models import Library
from apps.utils.models.models import GenericImage
from apps.authentication.models import ActivationToken

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

        from apps.utils.utils import generate_random_string

        code = generate_random_string(5)
        activation_token = ActivationToken.objects.create(user=instance, code=code)
        activation_url = f"http://localhost:5173/activate/{instance.uid}/{activation_token.token}/"

        # send mail for active account
        from .service.mail import MailService

        mailer = MailService()
        mailer.send_template_email(
            subject="Bienvenido al SISTEMA",
            template_name="mail/registered_user.html",
            context={
                "code": code,
                "active_url": activation_url,
            },
            recipient_list=[instance.email],
        )
