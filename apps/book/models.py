from django.db import models
from django.contrib.auth import get_user_model
from apps.utils.models.abstract_models import BaseModel
from apps.utils.models.models import GenericImage
from apps.category.models import Category

User = get_user_model()

class Book(BaseModel):
    def __str__(self):
        return f"{self.follower.user.user_name} follows {self.writer.user.user_name}"
    
    def get_slug_source_field(self):
        return 'title'
    
    class Meta:
        db_table = 'Book'
        managed = True
        verbose_name = 'Book'
        verbose_name_plural = 'Books'
        ordering = ("-created_at",)


class CategoryBook(BaseModel):
    
    
    def __str__(self):
        return f"{self.follower.user.user_name} follows {self.writer.user.user_name}"
    
    def get_slug_source_field(self):
        return 'book'
    
    class Meta:
        db_table = 'CategoryBook'
        managed = True
        verbose_name = 'CategoryBook'
        verbose_name_plural = 'CategorysBooks'
        ordering = ("-created_at",)