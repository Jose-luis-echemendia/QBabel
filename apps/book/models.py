from django.db import models
from django.contrib.auth import get_user_model
from apps.utils.models.abstract_models import BaseModel
from apps.utils.models.models import GenericImage, GenericDocument
from apps.category.models import Category

User = get_user_model()

class Book(BaseModel):
    author = models.ForeignKey(
        User,
        related_name='books',
        on_delete=models.CASCADE
    )
    title = models.CharField(max_length=255)
    cover = models.ForeignKey(
        GenericImage,
        related_name='book_cover',
        on_delete=models.SET_NULL,
        blank=True,
        null=True
    )
    synopsis = models.TextField(blank=True, null=True)
    file = models.ForeignKey(
        GenericDocument,
        related_name='book_file',
        on_delete=models.SET_NULL,
        blank=True,
        null=True
    )
    is_published = models.BooleanField(default=False)
    published_date = models.DateTimeField(blank=True, null=True)
    number_chapters = models.PositiveIntegerField(default=0)
    number_pages = models.PositiveIntegerField(default=0)
    lenguage = models.CharField(max_length=50, blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    
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
    book = models.ForeignKey(
        Book,
        related_name='category_book',
        on_delete=models.CASCADE
    )
    category = models.ForeignKey(
        Category,
        related_name='category_book',
        on_delete=models.CASCADE
    )
    
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
        unique_together = ("book", "category")