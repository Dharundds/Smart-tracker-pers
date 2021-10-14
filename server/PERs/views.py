from django.db import reset_queries
from django.shortcuts import render
from rest_framework.serializers import Serializer
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import *
from .models import *
import pandas as pd


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

    def get(self, request):
        data = [{'case_number': value.case_number, 'parent_case': value.parent_case}
                for value in CaseView.objects.all()]
        return Response(data)

    def post(self, request):
        pass


class getdata(APIView):
    serializer_class = PEViewSerializer

    def get(self, request):
        data = [{'PE_name': value.PE_name, 'Cnick': value.cnickname}
                for value in PEModel.objects.all()]
        return Response(data)

    def post(self, request):
        # data = pd.read_excel(request.body)
        # print(data)
        data = request.body
        print(data)
        return Response({})
