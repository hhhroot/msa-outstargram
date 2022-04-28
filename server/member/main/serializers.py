from rest_framework import serializers

from main.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        extra_kwargs = {'password': {'write_only': True}}
        fields = ["pk", "username", "password", "name", "phone", "email"]

    def save(self, **kwargs):
        data = {
            'username': self.validated_data['username'],
            'password': self.validated_data['password'],
            'name': self.validated_data['name'],
            'phone': self.validated_data['phone'],
            'email': self.validated_data['email'],
        }

        user = User.objects.create_user(**data)
        return user
