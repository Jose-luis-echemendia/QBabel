# models.py
from apps.utils.models.abstract_models import BaseModel
from django.db import models
from django.contrib.auth import get_user_model
import uuid

User = get_user_model()


class ActivationToken(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    token = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    code = models.CharField(max_length=5)
    used = models.BooleanField(default=False)

    def __str__(self):
        return f"Token for {self.user.email}"

    def get_slug_source_field(self):
        return "code"

    class Meta:
        db_table = "ActivationToken"
        managed = True
        verbose_name = "ActivationToken"
        verbose_name_plural = "ActivationTokens"
        ordering = ("-created_at",)
