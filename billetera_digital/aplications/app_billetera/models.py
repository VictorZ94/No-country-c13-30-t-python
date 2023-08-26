from django.db import models
from aplications.user.models import *


class UserDetail(models.Model):

    type_id = models.CharField('tipo_identificacion', max_length=10)
    identification = models.CharField('cedula', unique=True, max_length=15)
    cell_phone = PhoneNumberField(
        'celular', unique=True, null=False, blank=False)
    password = models.CharField('contraseña', unique=True, max_length=100)
    create_at = models.DateTimeField('fecha creaciòn', auto_now=True)
    updated_at = models.DateTimeField('fecha de actualizaciòn')

    class Meta:
        db_table = 'detalle de usuario'
        verbose_name = 'detalles de usuario'
        verbose_name_plural = 'usuario'
        ordering = ['cell_phone']

    def __str__(self):
        return f'{self.id} {self.cell_phone}'


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
