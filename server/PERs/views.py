from django.shortcuts import render
from rest_framework.serializers import Serializer
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import *
from .models import *
import pandas as pd
import sqlite3


class HomeView(APIView):
    serializer_class = GeneralSerializer
    
    def get(self, request):
        info = [{'name': info.name, 'age': info.age}
                for info in General.objects.all()]
        return Response(info)

    def post(self, request):
        serializer = GeneralSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

class FeedExcelView(APIView):
    serializer_class = CaseViewSerializer

    def get(self,request):
        data = [{'case_number':value.case_number,'parent_case':value.parent_case,'sts_agent_name':value.sts_agent_name,'Type':value.Type,'case_severity_level':value.case_severity_level,'session_time':value.session_time,'account_name_formula':account_name_formula,'case_support_mission':value.case_support_mission,'case_opened_date':value.case_opened_date,'status':value.status,'product':value.product,'case_status':value.case_status,'case_owner':value.case_owner} 
                for value in CaseView.objects.all() ]
        return Response(data)
    
    def post(self,request):
        pass
