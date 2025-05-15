from django.db import models
from django.utils import timezone
from django.contrib.auth import get_user_model
from apps.utils.models.abstract_models import BaseModel
from apps.utils.models.models import GenericImage
from apps.category.models import Category
from .enums import StatusPost

User = get_user_model()

class Post(BaseModel):

    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status=StatusPost.published)

        def get(self, *args, **kwargs):
            return self.get_queryset().get(*args, **kwargs)

             

    title = models.CharField(max_length=255)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts")
    image = models.ForeignKey(GenericImage, on_delete=models.SET_NULL, blank=True, null=True)
    content = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    publication_date = models.DateTimeField(default=timezone.now)
    status = models.CharField(max_length=10, choices=StatusPost.choices, default=StatusPost.draft)

    objects = models.Manager()  # default manager
    post_objects = PostObjects()  # custom manager

    class Meta:
        db_table = 'Post'
        managed = True
        verbose_name = 'Post'
        verbose_name_plural = 'Posts'
        ordering = ("-published",)

    def __str__(self):
        return self.title

    def get_image(self):
        if self.image:
            return self.image.url
        return ""
