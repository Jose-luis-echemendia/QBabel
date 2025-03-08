from django.db import models
from apps.utils.models.abstract_models import BaseModel, AuditUserChangeModel
from apps.utils.models.models import GenericImage

class Category(BaseModel, AuditUserChangeModel):
    name = models.CharField(max_length=50, unique=True)
    image = models.OneToOneField(GenericImage, on_delete=models.SET_NULL, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    parent = models.ForeignKey('self', on_delete=models.SET_NULL, blank=True, null=True, related_name='children')

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'Category'
        managed = True
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
        ordering = ("-created_at",)
