# Generated by Django 5.0.6 on 2024-08-18 08:55

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('zhkh', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='announcement',
            name='an_time',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]