from django.db import models


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
