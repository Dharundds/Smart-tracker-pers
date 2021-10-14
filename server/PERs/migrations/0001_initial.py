# Generated by Django 3.2.8 on 2021-10-14 10:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CaseViews',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('case_number', models.CharField(max_length=255)),
                ('parent_case', models.CharField(blank=True, max_length=255)),
                ('session_dt_created', models.CharField(max_length=255)),
                ('sts_agent_name', models.CharField(max_length=255)),
                ('Type', models.CharField(max_length=255)),
                ('case_severity_level', models.CharField(max_length=255)),
                ('session_time', models.DecimalField(decimal_places=3, max_digits=4)),
                ('account_name_formula', models.CharField(max_length=255)),
                ('case_support_mission', models.CharField(max_length=255)),
                ('case_opened_date', models.CharField(max_length=255)),
                ('status', models.CharField(blank=True, max_length=100)),
                ('product', models.CharField(blank=True, max_length=255)),
                ('case_status', models.CharField(max_length=254)),
                ('case_owner', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='General',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('age', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='PEModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('PE_name', models.CharField(max_length=255)),
                ('cnickname', models.CharField(max_length=100)),
            ],
        ),
    ]
