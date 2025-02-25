from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model
from versatileimagefield.fields import VersatileImageField
from versatileimagefield.placeholder import OnStoragePlaceholderImage
from .abstract_models import BaseModel
from ..enums import ImageTypes
from ..image_manager import upload_generic_image, optimize_image
import environ

env=environ.Env()
User = get_user_model()

class GenericImage(BaseModel):
    """
    Model for handling generic images within the application
    """

    DEFAULT_EMOTE_COMPONENT_IMAGE_UUID = env('DEFAULT_EMOTE_COMPONENT_IMAGE_UUID')
    DEFAULT_LOGO_COMPONENT_IMAGE_UUID = env('DEFAULT_LOGO_COMPONENT_IMAGE_UUID')
    DEFAULT_WALL_ART_COMPONENT_IMAGE_UUID = env('DEFAULT_WALL_ART_COMPONENT_IMAGE_UUID')
    
    alt = models.CharField(
        verbose_name=_("Alt Text"), max_length=255, blank=True, null=True
    )
    title = models.CharField(
        verbose_name=_("Title"), max_length=255, blank=True, null=True
    )
    order = models.PositiveIntegerField(verbose_name=_("Order"), default=0)
    type = models.CharField(
        verbose_name=_("Type"),
        choices=ImageTypes.choices,
        default=ImageTypes.avatar,
        max_length=50,
    )
    image = VersatileImageField(
        verbose_name=_("Image"),
        upload_to=upload_generic_image,
        placeholder_image=OnStoragePlaceholderImage(path="images/placeholder.jpg"),
    )
    registered_by = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        verbose_name=_("Registered By"),
        related_name="images_registered",
    )

    def __str__(self):
        return "{} {} #{}".format(self.get_type_display(), self.title, self.pk)
    
    def get_slug_source_field(self):
        return 'title'

    def save(self, *args, **kwargs):
        super(GenericImage, self).save(*args, **kwargs)

    @property
    def url(self):
        return self.image.url

    @property
    def is_avatar(self):
        return self.type == ImageTypes.avatar
    
    @property
    def is_category(self):
        return self.type == ImageTypes.category
    
    @property
    def is_cover(self):
        return self.t

    class Meta:
        db_table = 'Image'
        managed = True
        verbose_name = _("Generic Image")
        verbose_name_plural = _("Generic Images")
        ordering = ("-created_at",)

class GenericDocument(BaseModel):
    class Meta:
        db_table = 'Document'
        managed = True
        verbose_name = _("Generic Decoument")
        verbose_name_plural = _("Generic Documents")
        ordering = ("-created_at",)