from django.db import models
from ..identification_details.models import *


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
