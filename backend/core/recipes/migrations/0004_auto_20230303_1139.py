# Generated by Django 4.1.5 on 2023-03-03 11:39

from django.contrib.postgres.operations import TrigramExtension, UnaccentExtension
from django.db import migrations
from core.settings.base import POSTGRES_LANGUAGE_UNACCENT


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0003_alter_ingredient_unique_together'),
    ]

    operations = [
        #https://docs.djangoproject.com/en/4.1/ref/contrib/postgres/lookups/
        TrigramExtension(),
        # https://docs.djangoproject.com/en/4.1/ref/contrib/postgres/lookups/#unaccent
        UnaccentExtension(),
        # create a custom unaccented language configuration
        migrations.RunSQL("CREATE TEXT SEARCH CONFIGURATION {} ( COPY = english )".format(POSTGRES_LANGUAGE_UNACCENT)),
        migrations.RunSQL("ALTER TEXT SEARCH CONFIGURATION {} ALTER MAPPING FOR hword, hword_part, word WITH unaccent, english_stem".format(POSTGRES_LANGUAGE_UNACCENT)),
    ]
