# Generated by Django 3.1 on 2020-10-06 02:52

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Entry',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(max_length=50)),
                ('email', models.TextField(max_length=80)),
                ('datetime', models.DateTimeField(auto_now_add=True)),
                ('subscriber', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='Entrys', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['-datetime'],
            },
        ),
    ]
