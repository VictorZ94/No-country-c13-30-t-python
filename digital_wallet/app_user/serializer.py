from rest_framework import serializers
from .models import *

class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDetail
        fields = '__all__'

class CreateUserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDetail

        def to_representation(self, instance):
            return {
                'id': instance.id,
                'user': {
                        'id': instance.user.id,
                        'first_name':instance.user.first_name,
                        'last_name':instance.user.last_name,
                        'email':instance.user.email,
                        'date_joined':instance.user.date_joined
                        },
                #'identification_type': instance.identification_type,
                # 'identification_number': instance.identification_number,
                # 'phone_number': instance.phone_number,
                # 'updated_at': instance.updated_at
            }