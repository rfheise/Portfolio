# Generated by Django 3.1.4 on 2021-04-24 22:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('me', '0002_fileupload_link'),
    ]

    operations = [
        migrations.AddField(
            model_name='link',
            name='show',
            field=models.BooleanField(default=False),
        ),
    ]
