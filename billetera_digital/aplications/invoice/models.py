from django.db import models


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
