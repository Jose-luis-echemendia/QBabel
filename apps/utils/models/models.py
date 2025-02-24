from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model
from versatileimagefield.fields import VersatileImageField
from versatileimagefield.placeholder import OnStoragePlaceholderImage
from .generic_abstract_models import BaseModel
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
        user = kwargs.pop("user", None)
        if not self.pk and not self.registered_by:
            self.registered_by = user
        if self.image:
            self.image = optimize_image(self.image)
        kwargs["is_type_image_generate"] = self.is_emote or self.is_logo or self.is_wall_art or self.is_custom_image
        super(GenericImage, self).save(*args, **kwargs)

    @property
    def url(self):
        return self.image.url

    @property
    def is_avatar(self):
        return self.type == ImageTypes.avatar
    
    @property
    def is_emote(self):
        return self.type == ImageTypes.emote
    
    @property
    def is_logo(self):
        return self.type == ImageTypes.logo
    
    @property
    def is_wall_art(self):
        return self.type == ImageTypes.wall_art
    
    @property
    def is_custom_image(self):
        return self.type == ImageTypes.custom_image

    @property
    def is_style_emote_component(self):
        return self.type == ImageTypes.style_emote_component 
    
    @property
    def is_color_palette_emote_component(self):
        return self.type == ImageTypes.color_palette_emote_component
    
    @property
    def is_expression_emote_component(self):
        return self.type == ImageTypes.expression_emote_component
    
    @property
    def is_base_emote_component(self):
        return self.type == ImageTypes.base_emote_component
    
    @property
    def is_accessory_emote_component(self):
        return self.type == ImageTypes.accessory_emote_component
    
    @property
    def is_primary_color_emote_component(self):
        return self.type == ImageTypes.primary_color_emote_component
    
    @property
    def is_secondary_color_emote_component(self):
        return self.type == ImageTypes.secondary_color_emote_component
    
    @property
    def is_actions_emote_component(self):
        return self.type == ImageTypes.actions_emote_component
    
    @property
    def is_presentation_gallery(self):
        return self.type == ImageTypes.presentation_gallery

    class Meta:
        verbose_name = _("Generic Image")
        verbose_name_plural = _("Generic Images")
        ordering = ("-created_at",)

