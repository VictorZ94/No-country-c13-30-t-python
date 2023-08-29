from ..serializer import *
from ..models import *
from rest_framework.views import APIView
from rest_framework.response import Response

class UserDetailApiView(APIView):

    def get(self, request):
        user_detail = UserDetail.objects.all()
        serializer = UserDetailSerializer(user_detail, many=True)
        return Response(serializer.data)