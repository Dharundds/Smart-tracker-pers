from import_export import resources, fields
from .models import *
from tablib import Databook


class PEModelResource(resources.ModelResource):
    PE_name = fields.Field(attribute='PE_name', column_name='PE Name')
    cnickname = fields.Field(attribute='cnickname',
                             column_name='Customer Nickname')

    class Meta:
        model = PEModel
        exclude = ('id',)
        import_id_fields = ('PE_name', 'cnickname',)


class CaseViewModelResource(resources.ModelResource):
    case_number = fields.Field(
        attribute='case_number', column_name='Case Number')
    parent_case = fields.Field(
        attribute='parent_case', column_name='Parent Case: Case Number')
    sts_agent_name = fields.Field(
        attribute='sts_agent_name', column_name='Session Time Support Agent Obfuscated Name')
    Type = fields.Field(attribute='Type', column_name='Type')
    session_dt_created = fields.Field(
        attribute='session_dt_created', column_name=' Session Time Date Created')
    case_severity_level = fields.Field(
        attribute="case_severity_level", column_name='Case Severity Level')
    session_time = fields.Field(
        attribute='session_time', column_name='Session Time: Total Duration')
    account_name_formula = fields.Field(
        attribute='account_name_formula', column_name='Account Name Formula')
    case_support_mission = fields.Field(
        attribute='case_support_mission', column_name='Case Support Mission')
    case_opened_date = fields.Field(
        attribute='case_opened_date', column_name='Case Opened Date',)
    status = fields.Field(attribute='status',
                          column_name='Status', default=None)
    product = fields.Field(attribute='product',
                           column_name='Product', default=None)
    case_status = fields.Field(
        attribute='case_status', column_name='Case Status')
    case_owner = fields.Field(attribute='case_owner', column_name='Case Owner')

    class Meta:
        model = CaseView
        exclude = ('id',)
        import_id_fields = ('case_number', 'parent_case', 'sts_agent_name', 'Type', 'session_dt_created', 'case_severity_level', 'session_time',
                            'account_name_formula', 'case_support_mission', 'case_opened_date', 'status', 'product', 'case_status', 'case_owner',)


class RSCModelResource(resources.ModelResource):
    resource_name = fields.Field(
        attribute='resource_name', column_name='Resource Name')
    name_per_ilc = fields.Field(
        attribute='name_per_ilc', column_name='Name as per ILC')
    cost = fields.Field(
        attribute='cost', column_name='Cost (USD @45 INR)')

    class Meta:
        model = ResourceNameModel
        exclude = ('id',)
        import_id_fields = ('resource_name', 'name_per_ilc', 'cost',)
