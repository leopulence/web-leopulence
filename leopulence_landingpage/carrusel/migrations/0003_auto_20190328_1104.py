# Generated by Django 2.0.2 on 2019-03-28 14:04

import carrusel.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carrusel', '0002_auto_20181205_1359'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carrusel',
            name='image',
            field=models.ImageField(upload_to=carrusel.models.custom_upload_to, verbose_name='Imagen'),
        ),
    ]
