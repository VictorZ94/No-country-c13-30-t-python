from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from aplications.app_billetera.models import UserDetail


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
