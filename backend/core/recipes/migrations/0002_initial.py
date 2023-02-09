# Generated by Django 4.1.5 on 2023-02-09 13:42

from django.conf import settings
import django.contrib.postgres.indexes
from django.db import migrations, models
import django.db.models.deletion
import recipes.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('recipes', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='recipereview',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='review', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='recipeingredient',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='recipeimage',
            name='recipe',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='recipes.recipe'),
        ),
        migrations.AddField(
            model_name='recipe',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='recipe',
            name='category',
            field=models.ForeignKey(on_delete=models.SET(recipes.models.get_default_recipe_category), related_name='recipe_list', to='recipes.category'),
        ),
        migrations.AddField(
            model_name='recipe',
            name='ingredients',
            field=models.ManyToManyField(related_name='ingredient', to='recipes.recipeingredient'),
        ),
        migrations.AddIndex(
            model_name='recipe',
            index=django.contrib.postgres.indexes.GinIndex(fields=['search_vector'], name='recipes_rec_search__ce256b_gin'),
        ),
        migrations.AddIndex(
            model_name='recipe',
            index=models.Index(fields=['slug'], name='recipes_rec_slug_412256_idx'),
        ),
        migrations.AddIndex(
            model_name='recipe',
            index=models.Index(fields=['rating_value'], name='recipes_rec_rating__e43bcc_idx'),
        ),
        migrations.AddIndex(
            model_name='recipe',
            index=models.Index(fields=['rating_count'], name='recipes_rec_rating__66f33e_idx'),
        ),
    ]
