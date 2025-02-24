from django.db import models
from django.utils.translation import gettext_lazy as _
from django.conf import settings
from ..utils import generate_unique_slug
import uuid

User = settings.AUTH_USER_MODEL

class AbstractDateModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_("Created Date"))
    updated_at = models.DateTimeField(auto_now=True, verbose_name=_("Updated Date"))
    
    class Meta:
        abstract = True

class BaseModel(AbstractDateModel):
    """
    model that represents the basic fields for all instances of the database
    """
    uid = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    slug = models.SlugField(unique=True, blank=True, null=True,verbose_name=_("Slug"))
    is_active = models.BooleanField(default=True, verbose_name=_("Is Active"))

    class Meta:
        abstract = True

    def soft_delete(self):
        """Logically remove the object by changing is_active to False."""
        self.is_active = False
        self.save()
        
    def save(self, *args, **kwargs):
        from apps.emote.models import Emote, EmoteImage
        from apps.custom_image.models import CustomImage, CustomImageImage
        from apps.logo.models import Logo, LogoImage
        from apps.wall_art.models import WallArt, WallArtImage
        
        is_type_image_generate = kwargs.pop("is_type_image_generate", None)
        
        if (
            ((self.slug and self.__class__.objects.filter(slug=self.slug).exists()) or not self.slug) 
            and not is_type_image_generate
            and not isinstance(self, Emote)
            and not isinstance(self, EmoteImage)
            and not isinstance(self, CustomImage)
            and not isinstance(self, CustomImageImage)
            and not isinstance(self, Logo)
            and not isinstance(self, LogoImage)
            and not isinstance(self, WallArt)
            and not isinstance(self, WallArtImage)
            ):
            self.slug = generate_unique_slug(self, getattr(self, self.get_slug_source_field()))

        super(BaseModel, self).save(*args, **kwargs)

    def get_slug_source_field(self):
        """
        Sobrescribe este método en los modelos hijos para devolver
        el campo que debe usarse para generar el slug.
        """
        raise NotImplementedError("You must override get_slug_source_field to specify the slug source field.")
        
class AuditUserChangeModel(models.Model):
    created_by = models.ForeignKey(
        User,
        related_name="%(class)s_created",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        verbose_name=_("Created by"),
    )
    updated_by = models.ForeignKey(
        User,
        related_name="%(class)s_updated",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        verbose_name=_("Updated by"),
    )

    class Meta:
        abstract = True       