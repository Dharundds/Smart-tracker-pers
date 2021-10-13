from django.db import models


class CaseView(models.Model):
    case_number = models.CharField(max_length=255)
    parent_case = models.CharField(max_length=255,blank=True)
    sts_agent_name = models.CharField(max_length=255)
    Type = models.CharField(max_length=255)
    case_severity_level = models.CharField(max_length=255)
    session_time = models.DecimalField(decimal_places=3,max_digits=4)
    account_name_formula = models.CharField(max_length=255)
    case_support_mission = models.CharField(max_length=255)
    case_opened_date = models.DateTimeField()
    status = models.CharField(max_length=100,blank=True)
    product = models.CharField(max_length=255,blank=True)
    case_status = models.CharField(max_length=255)
    case_owner = models.CharField(max_length=255)

    def __str__(self) :
        return self.case_number+" | "+self.case_owner


class PEModel(models.Model):
    PE_name = models.CharField(max_length=255)
    cnickname = models.CharField(max_length=100)

    def __str__(self):
        return self.name




class General(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()

    def __str__(self):
        return self.name
