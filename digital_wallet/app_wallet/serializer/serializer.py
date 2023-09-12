from rest_framework import serializers
from ..models import *


class BalanceDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BalanceDetail
        fields = '__all__'


class BalanceSerializer(serializers.Serializer):
    balance = serializers.DecimalField(max_digits=10, decimal_places=2)
    user__name = serializers.CharField()
    user__uuid_user = serializers.CharField()


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ['user', 'amount', 'details', 'transaction_type']


class ReloadSerializer(serializers.Serializer):
    reload = serializers.DecimalField(max_digits=10, decimal_places=2)
    identification = serializers.CharField()


class withdrawalSerializer(serializers.ModelSerializer):
    class Meta:
        model = withdrawal
        fields = ['identification_number', 'value']


class withdrawalBalanceDetailSerializer(serializers.Serializer):
    identification_number = serializers.CharField()
    code_validation = serializers.CharField()

