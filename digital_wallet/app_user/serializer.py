from rest_framework import serializers
from .models import *


class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDetail
        fields = '__all__'


class CreateUserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['__all__']

    def to_representation(self, instance):
        return {
            'name': instance.name,
            'email': instance.email

        }
