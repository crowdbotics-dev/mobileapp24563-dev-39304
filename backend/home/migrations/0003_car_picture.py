# Generated by Django 2.2.28 on 2022-10-24 14:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_car'),
    ]

    operations = [
        migrations.AddField(
            model_name='car',
            name='picture',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
    ]
