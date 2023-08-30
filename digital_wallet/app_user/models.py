from django.db import models
from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumberField
# Create your models here.



class UserDetail(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    #identification_type = models.CharField(max_length=50)
    identification_number = models.CharField(max_length=20)
    phone_number = models.CharField(max_length=10, unique = True, null = False, blank = False)
    #phone_number = PhoneNumberField(unique = True, null = False, blank = False)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f'{self.user} {self.identification_number}'