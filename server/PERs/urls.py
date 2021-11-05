from django.urls import path
from django.conf.urls import url
from rest_framework import views
from .views import *

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('accview/<str:uname>', AccountView.as_view(), name='pe'),
    path('caseviews', CaseViews.as_view(), name='caseviews'),
    path('caseview/<int:id>', Caseview.as_view(), name='caseview'),
    path('quoted/<str:name>', QuotedPriceView.as_view(), name='quoted'),
    # path('deletecaseviews', DeleteAll.as_view(), name="delete")
]
