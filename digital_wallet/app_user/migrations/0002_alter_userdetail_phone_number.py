# Generated by Django 4.2.4 on 2023-08-29 01:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_user', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userdetail',
            name='phone_number',
            field=models.CharField(max_length=10, unique=True),
        ),
    ]
