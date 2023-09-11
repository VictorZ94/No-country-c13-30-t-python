from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from app_user.serializer import UserSerializer
from ..serializer import UserSerializer
from ..models import *


"""
  The Userview class is an API view that retrieves a user object by its ID and returns it in serialized form.
"""
class Userview(APIView):
  

    def get(self, request, id):
        try:
          data = User.objects.get(id = id)
        except:
          return Response({'user': "No existe este usuario"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = UserSerializer(data)
        return Response({'user': serializer.data}, status=status.HTTP_200_OK)
       
