# Generated by Django 3.1 on 2020-10-17 09:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('entry', '0002_auto_20201006_2204'),
    ]

    operations = [
        migrations.AddField(
            model_name='entry',
            name='score',
            field=models.IntegerField(default=0),
        ),
    ]
