from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model
from apps.profile.models import Profile

User = get_user_model()

@receiver(post_save, sender=User)
def post_save_user_create_create_profile(sender, instance, created,*args, **kwargs):
    if created:
        profile_for_user = Profile.objects.create(user=instance)
        profile_for_user.save()