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


class AccountView(APIView):
    serializer_class = PEViewSerializer

    def get(self, request, uname):
        cont = {}
        snippets = PEModel.objects.filter(PE_name=uname)
        serializer = PEViewSerializer(snippets, many=True)
        # -------------------------------------------------------
        cus_nick = [val['cnickname'] for val in serializer.data]
        acc = CaseView.objects.filter(account_name_formula__in=cus_nick)
        acc_serializer = CaseViewSerializer(acc, many=True)
        # --------------------------------------------------------------
        rscs = [dt['sts_agent_name'] for dt in acc_serializer.data]
        rsc = ResourceNameModel.objects.filter(resource_name__in=rscs)
        rsc_serializer = RSCSerializer(rsc, many=True)
        for n in cus_nick:
            li = []
            for a in acc_serializer.data:
                for r in rsc_serializer.data:
                    if r["role"] == "PER":
                        if n == a['account_name_formula'] and a['sts_agent_name'] is not None:
                            li.append("PER"+"|"+str(a['sts_agent_name']))
                    elif r['role'] == "MCR":
                        if n == a['account_name_formula'] and a['sts_agent_name'] is not None:
                            li.append("MCR"+"|"+str(a['sts_agent_name']))
                cont[n] = set(li)

        content = {
            "PE": serializer.data,
            "RSC": rsc_serializer.data,
            "accounts": cont,
        }
        return Response(content)

    def post(self, request):
        pass


class CaseViews(APIView):
    serializer_class = CaseViewSerializer

    def get(self, request, name):
        acc_name = PEModel.objects.filter(PE_name=name)
        acc_name_serialzer = PEViewSerializer(acc_name, many=True)
        data = CaseView.objects.filter(
            account_name_formula__in=[val['cnickname'] for val in acc_name_serialzer.data])
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
    full = 1000.00
    is_70 = False
    is_100 = False

    def get(self, request, name, pename):
        time_spt = CaseView.objects.filter(
            sts_agent_name=name.split("|")[1], account_name_formula=pename)
        price = ResourceNameModel.objects.filter(
            role=name.split("|")[0], resource_name=name.split("|")[1])
        serializer = CaseViewSerializer(time_spt, many=True)
        s = RSCSerializer(price, many=True)
        for data in serializer.data:
            self.count += float(data['session_time'])
        for i in s.data:
            self.cost = i['cost']
        tot = float(self.count) * float(self.cost)
        if tot >= 0.70*self.full:
            self.is_70 = True
        elif tot >= self.full:
            self.is_70 = False
            self.is_100 = True

        content = {
            'timespt': serializer.data,
            'price': s.data,
            "is_70": self.is_70,
            "full": self.is_100,
            "cost": self.cost,
            "tot": tot,
            "count": self.count,
        }
        return Response(content)


# class DeleteAll(APIView):
#     def get(self, request):
#         delt = CaseView.objects.all().delete()
#         return Response({})
