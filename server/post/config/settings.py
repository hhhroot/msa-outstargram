import sys
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.append(str(BASE_DIR.parent))
from server_settings import *

WSGI_APPLICATION = 'config.wsgi.application'
MIDDLEWARE += []
AUTH_PASSWORD_VALIDATORS += []

INSTALLED_APPS += [
    'django_extensions',
    'main',
]

DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'NAME': 'posts',
        # 'ENFORCE_SCHEMA': True,  # db - model 간의 일치여부 확인
        'CLIENT': {
            'host': 'localhost',
            'port': 27017,
            'username': 'root',
            'password': 'root',
            'authMechanism': 'SCRAM-SHA-1'
        },
    }
}
