from ..serializer import *
from ..models import *
from rest_framework.views import APIView
from rest_framework.response import Response

class UserDetailApiView(APIView):

    def get(self, request):
        user_detail = User.objects.all()
        serializer = UserDetailSerializer(user_detail, many=True)
        return Response(serializer.data)
    
    def post(self, request):
            serializer = CreateUserDetailSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                validatedData = serializer.validated_data
                user_detail = UserDetail(**validatedData)
                user_detail.save()
                serializerResponse = CreateUserDetailSerializer(user_detail)
                return Response(serializerResponse.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)