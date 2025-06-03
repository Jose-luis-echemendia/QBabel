# models.py
from apps.utils.models.abstract_models import BaseModel
from django.db import models
from django.contrib.auth import get_user_model
import uuid

User = get_user_model()


class ActivationToken(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    token = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    used = models.BooleanField(default=False)

    def __str__(self):
        return f"Token for {self.user.email}"
