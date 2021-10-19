from django.urls import path
from django.conf.urls import url
from .views import *

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('PEview', PEView.as_view(), name='pe'),
    path('caseview', CaseViews.as_view(), name='caseview'),
]
