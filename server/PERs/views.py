from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import *
from .models import *


class Home(APIView):
    def get(self, request, uname):
        snippets = PEModel.objects.filter(PE_name=uname)
        serializer = PEViewSerializer(snippets, many=True)
        return Response(serializer.data)


class AccountView(APIView):
    serializer_class = PEViewSerializer

    def get(self, request, uname):
        cont = {}
        acc = CaseView.objects.filter(account_name_formula=uname)
        acc_serializer = CaseViewSerializer(acc, many=True)
        # --------------------------------------------------------------
        rscs = [dt['sts_agent_name'] for dt in acc_serializer.data]
        rsc = ResourceNameModel.objects.filter(resource_name__in=rscs)
        rsc_serializer = RSCSerializer(rsc, many=True)
        # ---------------------------------------------------------------
        for name in set(rscs):
            thres = Threshold.objects.filter(acc_name=uname, rsc_name=name)
            thres_serial = ThresholdSerializer(thres, many=True)
            # print(thres_serial.data)
            if len(thres_serial.data) == 0:
                Threshold.objects.create(
                    acc_name=uname,
                    rsc_name=name
                )
            else:
                for thres in thres_serial.data:
                    maxthres = thres['max_threshold']
        content = {
            "RSC": rsc_serializer.data,
            "acc_case": acc_serializer.data,
            "max_thres": maxthres
        }
        return Response(content)

    def post(self, request, uname):
        thres = Threshold.objects.filter(acc_name=uname).update(
            max_threshold=int(request.data.get('thres')))
        print(request.data.get('thres'))
        return Response({"hi": "yes"})


class CaseViews(APIView):
    serializer_class = CaseViewSerializer

    def get(self, request, name):
        acc_name = PEModel.objects.filter(PE_name=name)
        acc_name_serializer = PEViewSerializer(acc_name, many=True)
        data = CaseView.objects.filter(
            account_name_formula__in=[val['cnickname'] for val in acc_name_serializer.data])
        serializer = CaseViewSerializer(data, many=True)

        content = {
            'cases': serializer.data,
        }

        return Response(content)

    def post(self, request):
        pass


# class Caseview(APIView):
#     serializer_class = CaseViewSerializer

#     def get(self, request, name, pename):
#         data = CaseView.objects.filter(
#             sts_agent_name=name.split("|")[1], account_name_formula=pename)
#         serializer = CaseViewSerializer(data, many=True)

#         return Response(serializer.data)


class TotalConsumptionView(APIView):
    count = 0
    cost = 0.000
    is_70 = False
    is_100 = False
    full = 100

    def get(self, request, pename):
        content = []
        thres = Threshold.objects.filter(acc_name=pename)
        thres_serial = ThresholdSerializer(thres, many=True)
        print(thres_serial.data)
        for name in thres_serial.data:
            time_spt = CaseView.objects.filter(
                sts_agent_name=name['rsc_name'], account_name_formula=pename)
            ts_serializer = CaseViewSerializer(time_spt, many=True)
            # -----------------------------------------------------------------
            price = ResourceNameModel.objects.filter(
                resource_name=name['rsc_name'])
            price_serializer = RSCSerializer(price, many=True)
            # -----------------------------------------------------------------

            for data in ts_serializer.data:
                self.count += float(data['session_time'])
            for i in price_serializer.data:
                self.cost = i['cost']
            tot = float(self.count) * float(self.cost)
            if tot >= 0.70*name['max_threshold']:
                self.is_70 = True
            elif tot >= name['max_threshold']:
                self.is_70 = False
                self.is_100 = True

            cont = {
                "name": name['rsc_name'],
                "tot": tot,
                "is_70": self.is_70,
                "full": self.is_100,
                "cost": self.cost,
                "max_thres": name['max_threshold']
            }

            content.append(cont)

        # content = {
        #     'timespt': ts_serializer.data,
        #     'price': price_serializer.data,
        #     "is_70": self.is_70,
        #     "full": self.is_100,
        #     "cost": self.cost,
        #     "tot": tot,
        #     "count": self.count,
        # }
        return Response({"content": content})

    def post(self, request, name, pename):
        print(request.data.get('threshold'))
        return Response({"hi": "hi"})


class UpdateEmail(APIView):

    def get(self, request):
        pass

    def post(self, request):
        print(request.data.get('email'))
        return Response({"hi": "hi"})


# class DeleteAll(APIView):
#     def get(self, request):
#         delt = CaseView.objects.all().delete()
#         return Response({})
