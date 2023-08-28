from django.db import models
from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumberField

class UserDetail(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    identification_type = models.CharField(max_length=50)
    identification_number = models.CharField(max_length=20)
    phone_number = PhoneNumberField(unique = True, null = False, blank = False)
    updated_at = models.DateTimeField(auto_now=True)

class BalanceDetail(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    initial_balance = models.DecimalField(max_digits=10, decimal_places=2)
    deposit_date = models.DateTimeField(auto_now_add=True)

class Transaction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tags = models.CharField(max_length=100)
    transaction_date = models.DateTimeField(auto_now_add=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    details = models.TextField()
    category = models.CharField(max_length=50)