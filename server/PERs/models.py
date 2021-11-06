from django.db import models
from django.db.models.fields import CharField
from datetime import datetime
import pandas as pd


class CaseView(models.Model):
    case_number = models.CharField(max_length=255)
    parent_case = models.CharField(max_length=255, blank=True, null=True)
    sts_agent_name = models.CharField(max_length=255, blank=True, null=True)
    Type = models.CharField(max_length=255, blank=True, null=True)
    session_dt_created = models.CharField(
        max_length=255, blank=True, null=True)
    case_severity_level = models.CharField(
        max_length=255, blank=True, null=True)
    session_time = models.CharField(blank=True, max_length=40, null=True)
    account_name_formula = models.CharField(
        max_length=255, blank=True, null=True)
    case_support_mission = models.CharField(
        max_length=255, blank=True, null=True)
    case_opened_date = models.CharField(max_length=255, blank=True, null=True)
    status = models.CharField(max_length=100, blank=True, null=True)
    product = models.CharField(max_length=255, blank=True, null=True)
    case_status = models.CharField(max_length=254, blank=True, null=True)
    case_owner = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return str(self.case_number)+" | "+str(self.case_owner)


class PEModel(models.Model):
    PE_name = models.CharField(max_length=255)
    cnickname = models.CharField(max_length=100)

    def __str__(self):
        return self.PE_name


class UploadResourceModel(models.Model):
    file = models.FileField(upload_to='')

    def save(self, *args, **kwargs):
        super(UploadResourceModel, self).save(*args, **kwargs)
        uploadfile()


class ResourceNameModel(models.Model):
    role = models.CharField(max_length=255)
    resource_name = models.CharField(max_length=255, null=True, blank=True)
    name_per_ilc = models.CharField(max_length=255, null=True, blank=True)
    cost = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.resource_name


class General(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()

    def __str__(self):
        return self.name


def uploadfile():
    exl = pd.ExcelFile('resource/RSC_Resource_Name_List_V3_Masked_1.xlsx')
    mcr = pd.read_excel(exl, 'MCR')
    dic = {}
    dic["rsc_name"] = list(mcr["Resource Name"].dropna())
    dic["npi"] = list(mcr["Name as per ILC"].dropna())
    dic["cost"] = list(mcr["Cost (USD @45 INR)"].dropna())
    for val in dic:
        print(dic[val])

    # rsc = ResourceNameModel.objects.create(
    #     role="MCR",
    #     resource_name=mcr["Resource Name"],
    #     name_per_ilc=mcr["Name as per ILC"],
    #     cost=mcr["Cost (USD @45 INR)"],
    # )
    # rsc.save()


# per = pd.read_excel(exl, 'PER')
#     rsc_1 = ResourceNameModel.objects.create(
#         role="PER",
#         resource_name=per["Resource Name"],
#         name_per_ilc=per["Name as per ILC"],
#         cost=per["Cost (USD @45 INR)"],
#     )
#     rsc_1.save()
