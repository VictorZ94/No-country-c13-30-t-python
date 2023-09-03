# from ..serializer import CreateUserDetailSerializer
from ..models import *
from django.contrib.auth import get_user_model, login, logout
from rest_framework.authentication import SessionAuthentication
from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from app_user.serializer import UserLoginSerializer, UserRegisterSerializer, UserSerializer

# class UserRegister(APIView):
#     permission_classes = (permissions.AllowAny,)

#     def post(self, request):
#         #clean_data = custom_validation
#         serializer = UserRegisterSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             validated = serializer.validated_data
#             serializer = serializer.create(validated)
#             return Response(serializer, status=status.HTTP_201_CREATED)
#         return Response(status=status.HTTP_400_BAD_REQUEST)


class UserRegister(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            validated = serializer.validated_data
            # Crear el usuario y obtener la instancia
            user = serializer.create(validated)
            print("**************")
            print(type(user))
            return Response(UserRegisterSerializer(user).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserLogin(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)

    def post(self, request):
        data = request.data
        # assert validate_email(data)
        # assert validate_password(data)
        serializer = UserLoginSerializer(data=data)
        print(serializer)
        if serializer.is_valid(raise_exception=True):
            user = serializer.check_user(data)

            login(request, user)
            return Response(serializer.data, status=status.HTTP_200_OK)


class UserLogout(APIView):
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)


class Userview(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'user': serializer.data}, status=status.HTTP_200_OK)


# class UserDetailApiView(APIView):


# class CreateUserDetail(APIView):
#    pass
    # # def get(self, request):
    # #     user_detail = User.objects.all()
    # #     serializer = UserDetailSerializer(user_detail, many=True)
    # #     return Response(serializer.data)

    # def post(self, request):
    #     serializer = CreateUserDetailSerializer(data=request.data)

    #     if serializer.is_valid(raise_exception=True):
    #         validatedData = serializer.validated_data
    #         serializer.create(validatedData)
    #         return Response(status=status.HTTP_201_CREATED)
    #     return Response(status=status.HTTP_400_BAD_REQUEST)
