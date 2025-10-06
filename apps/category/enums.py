from apps.utils.enums import Enum
from django.utils.translation import gettext_lazy as _


class TypeCategory(Enum):
    """
    Enum for category type.
    """
    book = _("Book")
    blog = _("Blog")
    video = _("Video")
    podcast = _("Podcast")
    article = _("Article")
    news = _("News")
    event = _("Event")
    product = _("Product")
    service = _("Service")
    other = _("Other")