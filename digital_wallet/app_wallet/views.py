from decimal import Decimal
from .serializer.serializer import BalanceSerializer, TransactionSerializer, ReloadSerializer
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import SessionAuthentication
from rest_framework import status, permissions
from .models import BalanceDetail, Transaction
from app_user.models import *


class BalanceApiView(APIView):
    """
        Class where the method needs a id to return or update
        any information
    """

    def getObject(self, id):
        """
            Validated if object exist
        """
        valor = BalanceDetail.objects.filter(
            user_id=id).values('balance', 'user__name', 'user__identification_number').first()

        return (valor)

    def get(self, request, id):
        current_balance = self.getObject(id)
        serializer = BalanceSerializer(current_balance)
        print(serializer)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ReloadMoneyView(APIView):
    """
        Class where the method needs a id to return or update
        any information
    """
    # El proceso es extraer el id desde user usando la cedula
    # y luego en balance con el id sumar ese valor.
    permission_classes = (permissions.IsAuthenticated,)
    # authentication_classes = (SessionAuthentication,)

    def post(self, request):

        identification = request.data['identification']
        print("")
        try:
            id_user = User.objects.filter(
                identification_number=identification).values('id').first()['id']
        except:
            return Response({'mensaje': 'usuario no existe'}, status=status.HTTP_404_NOT_FOUND)

        # current_balance = BalanceDetail.objects.filter(
        #     user_id=id_user).values('balance').first()['balance']
      
        new_balance = BalanceDetail.objects.get(user_id=id_user)
        new_balance.balance = (new_balance.balance + request.data['reload'])
        new_balance.save()

        return Response(status=status.HTTP_201_CREATED)


"""
  The `PayView` class is an API view that allows users to make transactions by deducting the  transaction amount from their current balance.
"""


# @method_decorator(csrf_exempt, name='dispatch')
class PayView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    #authentication_classes = (SessionAuthentication,)

    def post(self, request):

        # cambiar por  cedula la id
        id = request.data['user']
        current_balance = BalanceDetail.objects.filter(
            user_id=id).values('balance').first()
        current_balance = current_balance['balance']

        serializer = TransactionSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):

            validatedData = serializer.validated_data

            transaction = Transaction(**validatedData)
            # transaction.amount
            if current_balance >= transaction.amount:
                transaction.save()
                new_balance = BalanceDetail.objects.get(
                    user_id=id)
                new_balance.balance = (current_balance - transaction.amount)
                new_balance.save()
                serializerResponse = TransactionSerializer(
                    transaction)
                return Response(serializerResponse.data, status=status.HTTP_201_CREATED)
            else:
                return Response({"mensaje": "saldo insuficiente"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
