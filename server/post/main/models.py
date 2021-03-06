from djongo import models


class LikeUser(models.Model):
    user = models.CharField(max_length=20)

    class Meta:
        abstract = True


# for post create
class ImageModel(models.Model):
    _id = models.ObjectIdField()
    image = models.ImageField(upload_to='post_image/')


class PostImage(models.Model):
    image = models.ImageField(upload_to='post_image/')

    class Meta:
        abstract = True


class PostComment(models.Model):
    user = models.CharField(max_length=20)
    content = models.CharField(max_length=100)
    likes = models.ArrayField(model_container=LikeUser, blank=True, default=list)

    class Meta:
        abstract = True


class Post(models.Model):
    _id = models.ObjectIdField()
    user = models.CharField(max_length=20)
    content = models.TextField(null=True, default=None)
    location = models.CharField(max_length=30, null=True)
    images = models.ArrayField(model_container=PostImage, blank=True, default=list)
    comments = models.ArrayField(model_container=PostComment, blank=True, default=list)
    likes = models.ArrayField(model_container=LikeUser, blank=True, default=list)

    objects = models.DjongoManager()
