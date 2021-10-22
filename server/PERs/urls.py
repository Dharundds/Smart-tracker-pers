from django.urls import path
from django.conf.urls import url
from .views import *

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('PEviews', PEView.as_view(), name='pe'),
    path('caseviews', CaseViews.as_view(), name='caseviews'),
    path('caseview/<int:id>', Caseview.as_view(), name='caseview'),
]
