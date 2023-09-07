from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import SessionAuthentication
from rest_framework import status, permissions
from .models import BalanceDetail, Transaction
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from .serializer.serializer import BalanceSerializer, TransactionSerializer, ReloadSerializer
from decimal import Decimal


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
        serializer = ReloadSerializer(data=request.data)
        print("********************************")
        print(type(request.data))
        print(serializer)
        if serializer.is_valid(raise_exception=True):
            print("***************")
            print(serializer)
            validatedData = serializer.validated_data
            #         transaction = Transaction(**validatedData)
            #         transaction.save()
            #         serializerResponse = ReloadMoneySerializer(
            #             transaction)
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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
