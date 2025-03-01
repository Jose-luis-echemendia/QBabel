from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model
from apps.profile.models import Perfil

User = get_user_model()

@receiver(post_save, sender=User)
def post_save_user_create_create_perfil(sender, instance, created,*args, **kwargs):
    if created:
        perfil_for_user = Perfil.objects.create(user=instance)
        perfil_for_user.save()