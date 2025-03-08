from django.contrib import admin
from .models.models import GenericDocument, GenericImage

admin.site.register(GenericImage)
admin.site.register(GenericDocument)