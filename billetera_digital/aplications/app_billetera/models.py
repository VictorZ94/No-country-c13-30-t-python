from django.db import models
from aplications.user.models import *


class User(models.Model):
    name = models.CharField(
        'nombre', max_length=50)
    email = models.EmailField('correo', unique=True, max_length=100)
    id_user_detail = models.ForeignKey(
        UserDetail, on_delete=models.CASCADE)

    class Meta:
        db_table = 'usuario'
        verbose_name = 'usuario'
        verbose_name_plural = 'usuario'
        ordering = ['name']

    def __str__(self):
        return f'{self.id} {self.name} {self.email}'


class BalanceDetails(models.Model):
    balance = models.CharField(
        'tags', max_length=50)
    created_at = models.DateTimeField('fecha creaciòn')
    id_user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        db_table = 'balance'
        verbose_name = 'balance'
        verbose_name_plural = 'balance'
        ordering = ['created_at']

    def __str__(self):
        return f'{self.id} {self.created_at}'


class Transaction(models.Model):
    tags = models.CharField(
        'tags', max_length=50)
    created_at = models.DateTimeField('fecha creaciòn')
    amount = models.IntegerField('valor')
    details = models.CharField('detalles', max_length=200)
    category = models.CharField('categoria', max_length=15)
    id_balance_detail = models.ForeignKey(
        BalanceDetails, on_delete=models.CASCADE)

    class Meta:
        db_table = 'transacciones'
        verbose_name = 'transacciones'
        verbose_name_plural = 'transacciones'
        ordering = ['amount']

    def __str__(self):
        return f'{self.id} {self.created_at}'
