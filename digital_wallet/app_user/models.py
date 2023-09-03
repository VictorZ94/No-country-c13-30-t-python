from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .manager import MyUserManager
# Create your models here.


# class UserDetail(models.Model):

#     #identification_type = models.CharField(max_length=50)
#     identification_number = models.CharField(max_length=20)
#     phone_number = models.CharField(
#         max_length=10, unique=True, null=False, blank=False)
#     #phone_number = PhoneNumberField(unique = True, null = False, blank = False)
#     updated_at = models.DateTimeField(auto_now=True)

#     def __str__(self) -> str:
#         return f'{self.user} {self.identification_number}'


class User(AbstractBaseUser, PermissionsMixin):
    user_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(
        verbose_name='email address', max_length=255,  unique=True)
    username = models.CharField(max_length=100, blank=True, null=True)
    identification_number = models.CharField(max_length=20, null=False)
    phone_number = models.CharField(
        max_length=10, unique=True, null=False, blank=False)
    updated_at = models.DateTimeField(auto_now=True)

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = MyUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email

    # def has_perm(self, perm, obj=None):
    #     "Does the user have a specific permission?"
    #     # Simplest possible answer: Yes, always
    #     return True

    # def has_module_perms(self, app_label):
    #     "Does the user have permissions to view the app `app_label`?"
    #     # Simplest possible answer: Yes, always
    #     return True

    # @property
    # def is_staff(self):
    #     "Is the user a member of staff?"
    #     # Simplest possible answer: All admins are staff
    #     return self.is_admin
