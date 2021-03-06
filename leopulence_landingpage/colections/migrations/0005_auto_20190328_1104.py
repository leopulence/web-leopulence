# Generated by Django 2.0.2 on 2019-03-28 14:04

import colections.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('colections', '0004_colectionimage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='colection',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=colections.models.custom_upload_to_portada, verbose_name='Portada'),
        ),
        migrations.AlterField(
            model_name='colectionimage',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=colections.models.custom_upload_to, verbose_name='Fotos'),
        ),
    ]
