from django.contrib.auth.models import BaseUserManager
from .models import *


class MyUserManager(BaseUserManager):

    def create_user(self, email, password=None, **extra_fields):
        """
        Creates and saves a User with the given email, date of
        birth and password.
        """
        if not email:
            raise ValueError('Users must have an email address')
        if not password:
            raise ValueError('password is required')

        # normalize_email normalize el email dejandolo todo e minuscula
        email = self.normalize_email(email)
        user = self.model(email=email)
        # en esta linea se cifra el password

        user.set_password(password)
        user = self.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        if not email:
            raise ValueError('Users must have an email address')
        if not password:
            raise ValueError('password is required')

        user = self.create_user(
            email,
            password
        )

        # user = self.create_user(
        #     email,
        #     password=password,
        # )
        user.is_admin = True
        # user.save(using=self._db)
        return user
