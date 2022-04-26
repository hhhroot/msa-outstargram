from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.postgres.fields import ArrayField


# Create your models here.
class User(AbstractUser):
    name = models.CharField(max_length=20)
    img_profile = models.ImageField('프로필이미지', blank=True, upload_to='users_profile/')
    following = models.ManyToManyField('self', through='Relation', related_name='followers', symmetrical=False)
    posts = ArrayField(models.PositiveBigIntegerField(), blank=True, default=list)

    def __str__(self):
        return self.name


class Relation(models.Model):
    me = models.ForeignKey(User, related_name='me_set', on_delete=models.CASCADE)
    counterpart = models.ForeignKey(User, related_name='counterpart_set', on_delete=models.CASCADE)
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Relation (from: {self.me.name} to: {self.counterpart.name})'
