# Generated by Django 3.2.8 on 2021-10-14 11:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PERs', '0007_auto_20211014_1106'),
    ]

    operations = [
        migrations.AlterField(
            model_name='caseview',
            name='Type',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='caseview',
            name='parent_case',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='caseview',
            name='session_time',
            field=models.CharField(blank=True, max_length=40, null=True),
        ),
        migrations.AlterField(
            model_name='caseview',
            name='sts_agent_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
