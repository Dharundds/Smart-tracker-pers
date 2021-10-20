from rest_framework.serializers import Serializer
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import *
from .models import *


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


class PEView(APIView):
    serializer_class = PEViewSerializer

    def get(self, request):
        snippets = PEModel.objects.all()
        serializer = PEViewSerializer(snippets, many=True)
        return Response(serializer.data)

    def post(self, request):
        pass


class CaseViews(APIView):
    serializer_class = CaseViewSerializer

    def get(self, request):
        data = CaseView.objects.all()
        serializer = CaseViewSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        pass
