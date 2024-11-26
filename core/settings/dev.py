from .base import *

DEBUG = True

LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "handlers": {
        "file": {
            "level": "DEBUG",
            "class": "logging.FileHandler",
            "filename": "debug.log",
        },
    },
    "root": {
        "handlers": ["file"],
        "level": "DEBUG",
    },
}

ALLOWED_HOSTS = [
    "*",
    "127.0.0.1",
    "localhost",
]



CORS_ALLOWED_ORIGINS = [
    'http://localhost:5173',
    'http://localhost:3000',
    'http://localhost:8000',
    'http://127.0.0.1:8000',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:5173',
    "https://desing.netsy.ai",
]

CORS_ORIGIN_WHITELIST = [
    'http://localhost:3000',
    'http://localhost:8000',
    'http://127.0.0.1:8000',
    'http://127.0.0.1:3000',
    "https://desing.netsy.ai",
]

CSRF_TRUSTED_ORIGINS = [
    'http://localhost:3000',
    'http://localhost:8000',
    'http://127.0.0.1:8000',
    'http://127.0.0.1:3000',
    "https://desing.netsy.ai",
]

INTERNAL_IPS = [
    "localhost",
    "127.0.0.1",
]


STATICFILES_STORAGE = 'django.contrib.staticfiles.storage.StaticFilesStorage'

CORS_ALLOW_ALL_ORIGINS = True

if DOMAIN:
    CORS_ALLOWED_ORIGINS = [
        f"http://{DOMAIN}",
        f"https://{DOMAIN}",
        f"https://www.{DOMAIN}",
    ]

EMAIL_BACKEND='django.core.mail.backends.console.EmailBackend'

