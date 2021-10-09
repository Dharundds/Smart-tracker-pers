from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import GeneralSerializer
from .models import General


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
