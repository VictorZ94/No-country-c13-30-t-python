from django.db import models


class IdentificationDetails(models.Model):
    identification_type = models.CharField(
        'tipo_de_identificacion', max_length=20)
    number_id = models.CharField('numero', unique=True, max_length=20)
    address = models.CharField('direcciòn', max_length=50)

    class Meta:
        db_table = 'detalles_identificacion'
        verbose_name = 'Detalles_identificacion'
        verbose_name_plural = 'Detalles_identificacion'
        ordering = ['number_id']

    def __str__(self):
        return f'{self.id} {self.identification_type} {self.number_id} {self.address}'


class User(models.Model):
    name = models.CharField(
        'nombre', max_length=50)
    cell_phone = models.CharField('celular', unique=True, max_length=10)
    email = models.EmailField('correo', unique=True, max_length=100)
    password = models.CharField('contraseña', unique=True, max_length=100)
    create_at = models.DateTimeField('fecha creaciòn', auto_now=True)
    updated_at = models.DateTimeField('fecha de actualizaciòn')
    id_identification_details = models.ForeignKey(
        IdentificationDetails, on_delete=models.CASCADE)

    class Meta:
        db_table = 'usuario'
        verbose_name = 'usuario'
        verbose_name_plural = 'usuario'
        ordering = ['name']

    def __str__(self):
        return f'{self.id} {self.company_name} {self.reference_number}'


class Withdrawal(models.Model):
    pass

    class Meta:
        db_table = 'retiro'
        verbose_name = 'retiro'
        verbose_name_plural = 'retiro'
        #ordering = ['']

    def __str__(self):
        return f'{self.id}'


class PaymentTransfer(models.Model):
    number_id = models.CharField(
        'numero de cedula', unique=True, blank=False, null=False, max_length=20)

    class Meta:
        db_table = 'trasferencia_de_pago'
        verbose_name = 'trasferencia de pago'
        verbose_name_plural = 'trasferencia de pago'
        ordering = ['number_id']

    def __str__(self):
        return f'{self.id} {self.number_id}'


class Invoice(models.Model):
    company_name = models.CharField(
        'nombre de la empresa', max_length=50)
    reference_number = models.IntegerField('numero de referencia', unique=True)

    class Meta:
        db_table = 'factura'
        verbose_name = 'Detalles_identificacion'
        verbose_name_plural = 'factura'
        ordering = ['reference_number']

    def __str__(self):
        return f'{self.id} {self.company_name} {self.reference_number}'


class Payments(models.Model):
    tags = models.CharField(
        'tags', max_length=50)
    created_at = models.DateTimeField('fecha creaciòn')
    amount = models.IntegerField('valor')
    id_user = models.ManyToManyField(User)
    id_invoice = models.ForeignKey(Invoice, on_delete=models.CASCADE)
    id_paymenttransfer = models.ForeignKey(
        PaymentTransfer, on_delete=models.CASCADE)

    class Meta:
        db_table = 'pago'
        verbose_name = 'pago'
        verbose_name_plural = 'pago'
        ordering = ['amount']

    def __str__(self):
        return f'{self.id} {self.created_at} {self.id_user}'
