from apps.utils.enums import Enum
from django.utils.translation import gettext_lazy as _

class RoleType(Enum):
    admin = _("Admin")
    author = _("Author")
    user = _("User")