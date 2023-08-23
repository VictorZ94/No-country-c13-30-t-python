from django.db import models
from aplications.user.models import User
from ..invoice.models import Invoice
from ..paymenttransfer.models import PaymentTransfer


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
