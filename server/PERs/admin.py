from django.contrib import admin
from .models import *
from import_export import resources
from import_export.admin import ImportExportModelAdmin



class CaseResource(resources.ModelResource):

    class Meta:
        model = CaseView
        widgets = {
                'published': {'format': '%d.%m.%Y'},
                }


class CaseAdmin(ImportExportModelAdmin):
    resource_class = CaseResource 


admin.site.register(General)
admin.site.register(CaseView,CaseAdmin)