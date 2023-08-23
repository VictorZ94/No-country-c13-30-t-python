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
