from rest_framework import serializers
from .models import *


class GeneralSerializer(serializers.ModelSerializer):
    class Meta:
        model = General
        fields = ['name', 'age']

class CaseViewSerializer(serializers.Serializer):
    class Meta:
        model = CaseView
        fields = ['case_number','parent_case','sts_agent_name','Type','case_severity_level','session_time','account_name_formula','case_support_mission','case_opened_date','status','product','case_status','case_owner']