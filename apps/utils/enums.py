import operator
from collections import OrderedDict
from django.utils.translation import gettext_lazy as _


class EnumMetaClass(type):
    @classmethod
    def __prepare__(self, name, bases):
        return OrderedDict()

    def __new__(self, name, bases, classdict):
        members = []
        keys = {}
        choices = OrderedDict()
        for key, value in classdict.items():
            if key.startswith("__"):
                continue
            members.append(key)
            if isinstance(value, tuple):
                value, alias = value
                keys[alias] = key
            else:
                alias = None
            keys[alias or key] = key
            choices[alias or key] = value

        for k, v in keys.items():
            classdict[v] = k

        classdict["__choices__"] = choices
        classdict["__members__"] = members

        # Note: Differences between Python 2.x and Python 3.x force us to
        # explicitly use unicode here, and to explicitly sort the list. In
        # Python 2.x, class members are unordered and so the ordering will
        # vary on different systems based on internal hashing. Without this
        # Django will continually require new no-op migrations.
        classdict["choices"] = tuple(
            (str(k), str(v))
            for k, v in sorted(choices.items(), key=operator.itemgetter(0))
        )

        return type.__new__(self, name, bases, classdict)


class Enum(metaclass=EnumMetaClass):
    pass


class ImageTypes(Enum):
    avatar = _("Avatar")
    cover = _("Cover")
    category = _("Category")

class DocumentTypes(Enum):
    PDF = _("PDF")
    DOC = _("DOC")
    DOCX = _("DOCX")
    XLS = _("XLS")
    XLSX = _("XLSX")
    PPT = _("PPT")
    PPTX = _("PPTX")
    TXT = _("TXT")
    EPUB = _("EPUB")
    MOBI = _("MOBI")
    AZW = _("AZW")
    AZW3 = _("AZW3")
    RTF = _("RTF")
    HTML = _("HTML")
    CBZ = _("CBZ")
    CBR = _("CBR")
    DJVU = _("DJVU")
    FB2 = _("FB2")
    IBOOKS = _("IBOOKS")
    ODT = _("ODT")
    XPS = _("XPS")
    LIT = _("LIT")
    SNB = _("SNB")
    PDB = _("PDB")
    LRF = _("LRF")
    TCR = _("TCR")
    TEI = _("TEI")
    MD = _("MD")
    TEX = _("TEX")
    
    