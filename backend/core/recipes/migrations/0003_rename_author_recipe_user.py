# Generated by Django 4.1.5 on 2023-02-22 21:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0002_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='recipe',
            old_name='author',
            new_name='user',
        ),
    ]
