from rest_framework import serializers

from main.models import Post, ImageModel, LikeUser


class CreateImageSerializer(serializers.Serializer):
    image = serializers.ImageField(use_url=True)

    def create(self, validated_data):
        return ImageModel.objects.create(**validated_data)


class PostGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


class PostCreateSerializer(serializers.Serializer):
    user = serializers.CharField()
    content = serializers.CharField()
    location = serializers.CharField()
    images = serializers.ListField(
        child=serializers.ImageField()
    )

    def create(self, validate_data):
        images = validate_data.pop('images')
        post = Post.objects.create(**validate_data)

        for image in images:
            create_serializers = CreateImageSerializer(data={'image': image})
            if create_serializers.is_valid():
                post.images.append({'image': create_serializers.save().image.url})

        post.save()
        return post

    def to_representation(self, instance):
        return PostGetSerializer(instance).data


class LikeUserCreateSerializer(serializers.Serializer):
    user = serializers.CharField()
