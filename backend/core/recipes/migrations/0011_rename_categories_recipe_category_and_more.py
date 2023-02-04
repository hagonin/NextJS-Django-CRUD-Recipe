# Generated by Django 4.1.5 on 2023-02-03 16:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0010_remove_instruction_method_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='recipe',
            old_name='categories',
            new_name='category',
        ),
        migrations.RemoveField(
            model_name='category',
            name='type',
        ),
        migrations.AlterField(
            model_name='recipe',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='images'),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='rating_value',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='recipeimage',
            name='image',
            field=models.ImageField(default='images/default.png', help_text='Upload a product image', upload_to='images', verbose_name='image'),
        ),
        migrations.AlterField(
            model_name='recipeingredient',
            name='recipe',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ingredient', related_query_name='recipe', to='recipes.recipe'),
        ),
    ]
