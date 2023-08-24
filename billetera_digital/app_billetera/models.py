from django.db import models


class Transaction(models.Model):
    tags = models.CharField(
        'tags', max_length=50)
    created_at = models.DateTimeField('fecha creaciòn')
    amount = models.IntegerField('valor')
    details = models.CharField('detalles', max_length=200)
    category = models.CharField('categoria', max_length=15)

    class Meta:
        db_table = 'transacciones'
        verbose_name = 'transacciones'
        verbose_name_plural = 'transacciones'
        ordering = ['amount']

    def __str__(self):
        return f'{self.id} {self.created_at}'


class BalanceDetails(models.Model):
    balance = models.CharField(
        'tags', max_length=50)
    created_at = models.DateTimeField('fecha creaciòn')

    class Meta:
        db_table = 'balance'
        verbose_name = 'balance'
        verbose_name_plural = 'balance'
        ordering = ['created_at']

    def __str__(self):
        return f'{self.id} {self.created_at}'


class User(models.Model):
    name = models.CharField(
        'nombre', max_length=50)
    type_id = models.CharField('tipo_identificacion', max_length=10)
    identification = models.CharField('cedula', unique=True, max_length=15)
    cell_phone = models.CharField('celular', unique=True, max_length=10)
    email = models.EmailField('correo', unique=True, max_length=100)
    password = models.CharField('contraseña', unique=True, max_length=100)
    create_at = models.DateTimeField('fecha creaciòn', auto_now=True)
    updated_at = models.DateTimeField('fecha de actualizaciòn')
    id_transactions = models.ForeignKey(
        Transaction, on_delete=models.CASCADE)
    id_balance_details = models.ForeignKey(
        BalanceDetails, on_delete=models.CASCADE)

    class Meta:
        db_table = 'usuario'
        verbose_name = 'usuario'
        verbose_name_plural = 'usuario'
        ordering = ['name']

    def __str__(self):
        return f'{self.id} {self.name} {self.cell_phone}'
