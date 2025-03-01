from apps.utils.enums import Enum

from django.utils.translation import gettext_lazy as _

class SexType(Enum):
    f = _("Femenino")
    m = _("Masculino")