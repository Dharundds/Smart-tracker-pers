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


class Caseview(APIView):
    serializer_class = CaseViewSerializer

    def get(self, request, id):
        data = CaseView.objects.filter(id=id)
        serializer = CaseViewSerializer(data, many=True)
        return Response(serializer.data)


class QuotedPriceView(APIView):
    serializers_class = RSCSerializer
    count = 0
    cost = 0.00
    full = 700.00
    is_70 = False
    is_100 = False

    def get(self, request, name):
        time_spt = CaseView.objects.filter(sts_agent_name=name)
        price = ResourceNameModel.objects.filter(resource_name=name)
        serializer = CaseViewSerializer(time_spt, many=True)
        s = RSCSerializer(price, many=True)
        for data in serializer.data:
            self.count += float(data['session_time'])
        for i in s.data:
            self.cost = i['cost']
        tot = float(self.count) * float(self.cost.split('$')[1])
        if tot >= 0.70*tot:
            self.is_70 = True
        elif tot >= tot:
            self.is_70 = False
            self.is_100 = True
        content = {
            'timespt': serializer.data,
            'price': s.data,
            "is_70": self.is_70,
            "full": self.is_100
        }
        return Response(content)


# class DeleteAll(APIView):
#     def get(self, request):
#         delt = CaseView.objects.all().delete()
#         return Response({})
