from pathlib import Path
from datetime import timedelta
from google.oauth2 import service_account
import os
import environ


BASE_DIR = Path(__file__).resolve().parent.parent
env = environ.Env()
environ.Env.read_env()

ENVIRONMENT = env

SECRET_KEY = env("SECRET_KEY", default="strong-key")
SITE_ID = 1

DOMAIN = os.environ.get("DOMAIN")

ALLOWED_HOSTS = []

DJANGO_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "django.contrib.sites",
    "django.contrib.humanize",
]

PROJECT_APPS = ["apps.utils", "apps.user", "apps.authentication"]
QBABEL_APPS = [
    "apps.profile",
    "apps.category",
    "apps.book",
    "apps.library",
    "apps.comment",
]

THIRD_PARTY_APPS = [
    "corsheaders",
    "rest_framework",
    "storages",
    "social_django",
    "rest_framework_simplejwt",
    "rest_framework_simplejwt.token_blacklist",
    "simple_history",
    "django_filters",
]


INSTALLED_APPS = DJANGO_APPS + PROJECT_APPS + QBABEL_APPS + THIRD_PARTY_APPS


CKEDITOR_CONFIGS = {"default": {"toolbar": "full", "autoParagraph": False}}

CKEDITOR_UPLOAD_PATH = "/media/"

MIDDLEWARE = [
    "social_django.middleware.SocialAuthExceptionMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "simple_history.middleware.HistoryRequestMiddleware",
]

ROOT_URLCONF = "core.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "core.wsgi.application"
ASGI_APPLICATION = "core.asgi.application"


DATABASES = {
    "default": env.db("DATABASE_URL", default="postgres:///QBabel"),
}
DATABASES["default"]["ATOMIC_REQUESTS"] = True

PASSWORD_HASHERS = [
    "django.contrib.auth.hashers.Argon2PasswordHasher",
    "django.contrib.auth.hashers.PBKDF2PasswordHasher",
    "django.contrib.auth.hashers.PBKDF2SHA1PasswordHasher",
    "django.contrib.auth.hashers.BCryptSHA256PasswordHasher",
]


AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
        "OPTIONS": {
            "min_length": 8,
        },
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


LANGUAGE_CODE = "en-us"
TIME_ZONE = "UTC"
USE_I18N = True
USE_TZ = True

# Configurar las credenciales para Google Cloud

SERVICE_ACCOUNTS_FILE = os.path.join(BASE_DIR, "service-accounts.json")
# Cargar credenciales de la cuenta de servicio
GS_CREDENTIALS = service_account.Credentials.from_service_account_file(
    SERVICE_ACCOUNTS_FILE
)

# Nombre de tu bucket
GS_BUCKET_NAME = "qbabel"

# Configurar el backend para el almacenamiento de archivos
DEFAULT_FILE_STORAGE = "storages.backends.gcloud.GoogleCloudStorage"
GS_DEFAULT_ACL = None

# Opcional: Define una URL base si deseas generar enlaces a las imágenes
MEDIA_URL = f"https://storage.googleapis.com/{GS_BUCKET_NAME}/"


MEDIA_ROOT = os.path.join(BASE_DIR, "media")

STATIC_URL = "static/"

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

AUTH_USER_MODEL = "user.UserAccount"


REST_FRAMEWORK = {
    "DEFAULT_PERMISSION_CLASSES": [
        "rest_framework.permissions.IsAuthenticatedOrReadOnly"
    ],
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ),
    "DEFAULT_FILTER_BACKENDS": ["django_filters.rest_framework.DjangoFilterBackend"],
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.LimitOffsetPagination",
    "PAGE_SIZE": 12,
}


AUTHENTICATION_BACKENDS = (
    "social_core.backends.google.GoogleOAuth2",
    "social_core.backends.facebook.FacebookOAuth2",
    "django.contrib.auth.backends.ModelBackend",
    "apps.authentication.backends.EmailBackend",
    "allauth.account.auth_backends.AuthenticationBackend",
)

SIMPLE_JWT = {
    "USER_ID_FIELD": "uid",
    "USER_ID_CLAIM": "user_id",
    "AUTH_HEADER_TYPES": ("JWT",),
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=60),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=1),
    "ROTATE_REFRESFH_TOKENS": True,
    "BLACKLIST_AFTER_ROTATION": True,
    "AUTH_TOKEN_CLASSES": ("rest_framework_simplejwt.tokens.AccessToken",),
}


APPEND_SLASH = True
