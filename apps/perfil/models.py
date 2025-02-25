from django.db import models
from apps.user.models import User
from apps.utils.models.models import BaseModel

class Perfil(BaseModel):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(max_length=500, blank=True)
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)

    def __str__(self):
        return self.user.username
    
    class Meta:
        db_table = 'Perfil'
        managed = True
        verbose_name = 'Perfil'
        verbose_name_plural = 'Perfils'
        ordering = ("-created_at",)
