# Generated by Django 3.1.4 on 2021-05-12 08:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('me', '0004_post_link_short'),
    ]

    operations = [
        migrations.AddField(
            model_name='fileupload',
            name='password',
            field=models.TextField(blank=True, default=''),
        ),
        migrations.AddField(
            model_name='fileupload',
            name='self_destruct',
            field=models.BooleanField(default=False),
        ),
    ]
