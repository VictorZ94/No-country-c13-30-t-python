from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from .models import *

UserModel = get_user_model()


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = '__all__'

    def create(self, clean_data):
        user_obj = UserModel.objects.create(
            name=clean_data['name'],
            password=(clean_data['password']),
            identification_number=clean_data['identification_number'],
            email=clean_data['email'],
            phone_number=clean_data['phone_number']
        )
        # user_obj.set_password('password')
        #user_obj.username = clean_data['username']
        user_obj.save()
        return user_obj


class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def check_user(self, clean_data):
        user = authenticate(
            username=clean_data['email'], password=clean_data['password'])
        print(user)
        if not user:
            raise ValueError('User not found or incorrect password')
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model: UserModel
        fields = ('email', 'username')
    # class UserDetailSerializer(serializers.ModelSerializer):
    #     class Meta:
    #         model = UserDetail
    #         fields = ['identification_number',
    #                   'phone_number'
    #                   ]

    # class CreateUserDetailSerializer(serializers.ModelSerializer):
    #     id_detail = UserDetailSerializer()

    #     class Meta:
    #         model = User
    #         fields = ['name',
    #                   'email',
    #                   'password',
    #                   'id_detail'
    #                   ]

    #     def create(self, validated_data):
    #         # Extrae los detalles del usuario
    #         id_detail_data = validated_data.pop('id_detail')
    #         # Crea el usuario con los datos validados
    #         user = User.objects.create(**validated_data)
    #         # Crea los detalles del usuario
    #         UserDetail.objects.create(user=user, **id_detail_data)
    #         return user

    #     # def to_representation(self, instance):
    #     #     return {
    #     #         'name': instance.name,
    #     #         'id_detail': instance.id_detail.identification_number,
    #     #         'email': instance.email,
    #     #         'password': instance.password
    #     #     }
