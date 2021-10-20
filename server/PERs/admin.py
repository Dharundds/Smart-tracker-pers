from django.contrib import admin
from import_export.admin import ImportExportActionModelAdmin
from .models import *
from .resource import *


class PEAdmin(ImportExportActionModelAdmin):
    resource_class = PEModelResource


class CaseViewAdmin(ImportExportActionModelAdmin):
    resource_class = CaseViewModelResource


admin.site.register(General)
admin.site.register(CaseView, CaseViewAdmin)
admin.site.register(PEModel, PEAdmin)

admin.site.site_title = "Smart Tracker"
admin.site.site_header = "SmartTracker"
