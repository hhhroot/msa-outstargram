import sys
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.append(str(BASE_DIR.parent))
from server_settings import *

AUTH_USER_MODEL = 'main.User'
WSGI_APPLICATION = 'config.wsgi.application'
MIDDLEWARE += []
AUTH_PASSWORD_VALIDATORS += []

INSTALLED_APPS += [
    'django_extensions',
    'main',
    'phonenumber_field',
    'rest_framework',
    'rest_framework.authtoken',
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': SECRET['DB_NAME'],
        'USER': SECRET['DB_USER'],
        'PASSWORD': SECRET['DB_PASSWORD'],
        'HOST': SECRET['DB_HOST'],
        'PORT': SECRET['DB_PORT'],
    }
}

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
    ]
}
