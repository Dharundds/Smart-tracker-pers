from rest_framework import serializers
from .models import *


class GeneralSerializer(serializers.ModelSerializer):
    class Meta:
        model = General
        fields = ['name', 'age']


class CaseViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = CaseView
        fields = ['id', 'case_number', 'parent_case', 'sts_agent_name', 'Type', 'session_dt_created', 'case_severity_level', 'session_time',
                  'account_name_formula', 'case_support_mission', 'case_opened_date', 'status', 'product', 'case_status', 'case_owner']


class PEViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = PEModel
        fields = ['id', 'PE_name', 'cnickname']


class RSCSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResourceNameModel
        fields = ['id', 'role', 'resource_name', 'name_per_ilc', 'cost']


class ThresholdSerializer(serializers.ModelSerializer):
    class Meta:
        model = Threshold
        fields = ['id', 'acc_name', 'rsc_name', 'max_threshold']
