import os

import pytest
from django.core.files.uploadedfile import SimpleUploadedFile

from config.settings import SERVER_ROOT
from main.models import User


@pytest.mark.django_db(transaction=True)
class TestUser:
    pytestmark = pytest.mark.django_db

    # 유저 생성
    def test_create_user(self):
        # parameters
        params = {
            'username': 'test',
            'password': 'test',
            'email': 'test@test.com',
            'name': 'test',
            'phone': '+821086243748',
            'img_profile': SimpleUploadedFile(name='test_image.jpg',
                                              content=open(os.path.join(SERVER_ROOT, 'test_image.png'), 'rb').read(),
                                              content_type='image/png')
        }

        user = User.objects.create(**params)
        assert user

    def test_following(self):
        assert 1 == 1
