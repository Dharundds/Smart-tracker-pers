from django.urls import path
from django.conf.urls import url
from .views import *

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('getcaseview', FeedExcelView.as_view(), name='caseview'),
    path('senddata',getdata.as_view(),name='excel')
]
