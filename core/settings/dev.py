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
