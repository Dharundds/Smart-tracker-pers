# Generated by Django 3.2.8 on 2021-10-11 17:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PERs', '0002_caseview'),
    ]

    operations = [
        migrations.AlterField(
            model_name='caseview',
            name='case_number',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='caseview',
            name='parent_case',
            field=models.CharField(max_length=255),
        ),
    ]
