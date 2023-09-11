from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from app_user.serializer import UserSerializer
from ..serializer import UserSerializer
from ..models import *

class Userview(APIView):

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'user': serializer.data}, status=status.HTTP_200_OK)
