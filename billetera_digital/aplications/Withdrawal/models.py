from django.db import models


class Withdrawal(models.Model):
    pass

    class Meta:
        db_table = 'retiro'
        verbose_name = 'retiro'
        verbose_name_plural = 'retiro'
        #ordering = ['']

    def __str__(self):
        return f'{self.id}'
