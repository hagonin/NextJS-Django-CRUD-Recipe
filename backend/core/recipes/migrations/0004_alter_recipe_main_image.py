# Generated by Django 4.1.5 on 2023-03-10 13:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0003_auto_20230310_0038'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='main_image',
            field=models.ImageField(upload_to='recipes'),
        ),
    ]
