from decimal import Decimal
from .serializer.serializer import *
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
import random


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
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)

    def post(self, request):

        identification = request.data['identification']
        print("")
        try:
            id_user = User.objects.filter(
                identification_number=identification).values('user_id').first()['user_id']
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
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)

    def post(self, request, id):

        # cambiar por  cedula la id
        current_balance = BalanceDetail.objects.filter(
            user_id=id).values('balance').first()
        current_balance = current_balance['balance']

        serializer = TransactionSerializer(data=request.data)
        print(serializer)
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


class Paywithdrawal(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)

    def post(self, request):
        """
        JSON de entrada:
        {
            "identification_number": "123456789",
            "value": 20000
        }
        """

        code = random.randint(100000, 999999)

        data2 = request.data
        data2["code_validation"] = str(code)
        print(data2)

        identification_number = data2["identification_number"]

        try:
            # Intenta buscar el registro existente por identification_number
            withdrawal_m = withdrawal.objects.get(identification_number=identification_number)
            
            # Si el registro existe, actualiza los campos
            withdrawal_m.code_validation = str(code)
            withdrawal_m.value = data2["value"]
            withdrawal_m.save()

            return Response({"mensaje": withdrawal_m.code_validation}, status=status.HTTP_200_OK)

        except withdrawal.DoesNotExist:
            # Si no se encuentra el registro, crea uno nuevo
            serializer = withdrawalSerializer(data=data2)

            if serializer.is_valid():
                withdrawal_m = serializer.save()
                return Response({"mensaje": withdrawal_m.code_validation}, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)