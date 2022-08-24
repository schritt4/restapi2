# Generated by Django 4.0.4 on 2022-08-24 11:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0020_rename_latlng_place_menu_place_lat_place_lng_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='curation',
            name='curation_list',
        ),
        migrations.RemoveField(
            model_name='curation',
            name='user',
        ),
        migrations.RemoveField(
            model_name='curationlist',
            name='place1',
        ),
        migrations.RemoveField(
            model_name='curationlist',
            name='place2',
        ),
        migrations.RemoveField(
            model_name='curationlist',
            name='place3',
        ),
        migrations.RemoveField(
            model_name='curationlist',
            name='place4',
        ),
        migrations.RemoveField(
            model_name='curationlist',
            name='place5',
        ),
        migrations.RemoveField(
            model_name='place',
            name='cat',
        ),
        migrations.RemoveField(
            model_name='place',
            name='loc',
        ),
        migrations.RemoveField(
            model_name='place',
            name='pur1',
        ),
        migrations.RemoveField(
            model_name='place',
            name='pur2',
        ),
        migrations.DeleteModel(
            name='Category',
        ),
        migrations.DeleteModel(
            name='Curation',
        ),
        migrations.DeleteModel(
            name='CurationList',
        ),
        migrations.DeleteModel(
            name='Location',
        ),
        migrations.DeleteModel(
            name='Place',
        ),
        migrations.DeleteModel(
            name='Purpose1',
        ),
        migrations.DeleteModel(
            name='Purpose2',
        ),
    ]
