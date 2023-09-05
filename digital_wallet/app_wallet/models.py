from django.db import models
from django.contrib.auth.models import User
from django.conf import settings


class BalanceDetail(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL,
                                on_delete=models.CASCADE)
    initial_balance = models.DecimalField(
        'saldo', max_digits=10, decimal_places=2)
    deposit_date = models.DateTimeField('fecha_deposito', auto_now_add=True)

    class Meta:
        db_table = 'BalanceDetail'

    def __str__(self):
        return f'{self.user} {self.initial_balance} {self.deposit_date}'


class Transaction(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             related_name='usuario',
                             on_delete=models.CASCADE)
    tags = models.CharField(max_length=100)
    transaction_date = models.DateTimeField(
        'fecha_trasaccion', auto_now_add=True)
    amount = models.DecimalField('cantidad', max_digits=10, decimal_places=2)
    details = models.TextField(max_length=200)
    category = models.CharField('category', max_length=50)

    class Meta:
        db_table = 'Transaction'

    def __str__(self):
        return f'{self.user} {self.transaction_date} {self.amount}'
