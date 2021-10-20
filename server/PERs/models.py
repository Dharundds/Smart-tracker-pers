from django.db import models


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


class General(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()

    def __str__(self):
        return self.name
