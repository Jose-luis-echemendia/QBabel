from django.db import models
from apps.utils.models.abstract_models import BaseModel, AuditUserChangeModel
from apps.utils.models.models import GenericImage
from .enums import TypeCategory

class Category(BaseModel, AuditUserChangeModel):
    
    class CategoryObjects(models.Manager):
        def get_queryset(self, type=TypeCategory.blog):
            return super().get_queryset().filter(type=type)
    
    name = models.CharField(max_length=50, unique=True)
    image = models.OneToOneField(GenericImage, on_delete=models.SET_NULL, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    parent = models.ForeignKey('self', on_delete=models.SET_NULL, blank=True, null=True, related_name='children')
    type = models.CharField(max_length=50, choices=TypeCategory.choices, default=TypeCategory.other)

    objects = models.Manager()  # default manager
    category_objects = CategoryObjects()  # custom manager

    def __str__(self):
        return self.name
    
    def get_slug_source_field(self):
        return 'name'

    class Meta:
        db_table = 'Category'
        managed = True
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
        ordering = ("-created_at",)
