# Generated by Django 3.1.4 on 2021-05-13 20:12

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('me', '0007_mlb'),
    ]

    operations = [
        migrations.CreateModel(
            name='Last',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(default=django.utils.timezone.now)),
                ('team', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='me.mlb')),
            ],
        ),
    ]
