from apps.utils.enums import Enum

from django.utils.translation import gettext_lazy as _

class StatusPost(Enum):
    """
    Enum for post status.
    """
    draft = _("Draft")
    published = _("Published")
    archived = _("Archived")
    deleted = _("Deleted")
    