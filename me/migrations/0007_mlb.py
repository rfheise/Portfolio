# Generated by Django 3.1.4 on 2021-05-13 19:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('me', '0006_auto_20210512_0507'),
    ]

    operations = [
        migrations.CreateModel(
            name='MLB',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('team', models.TextField()),
                ('out', models.BooleanField(default=False)),
            ],
        ),
    ]
