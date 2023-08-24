from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


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
