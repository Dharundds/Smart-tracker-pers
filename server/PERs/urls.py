from django.urls import path
from django.conf.urls import url
from rest_framework import views
from .views import *

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('accview/<str:uname>', AccountView.as_view(), name='pe'),
    path('caseviews/<str:name>', CaseViews.as_view(), name='caseviews'),
    path('caseview/<str:name>/<str:pename>',
         Caseview.as_view(), name='caseview'),
    path('tot_consumption/<str:name>/<str:pename>',
         TotalConsumptionView.as_view(), name='consumption'),
    path('updateEmail', UpdateEmail.as_view(), name='update')
    # path('deletecaseviews', DeleteAll.as_view(), name="delete")
]
