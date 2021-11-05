import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./CaseViews.css";
import Symbols from "../Symbols";
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
const CaseViews = () => {
  const [isLoading, setisLoading] = useState(true);
  const [caseView, setCaseView] = useState({});
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);
  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    const updateData = (data) => {
      setRowData(data);
    };

   
      
      fetch("http://127.0.0.1:8000/caseviews", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
    .then((resp) => resp.json())
    .then((data) => updateData(data));
      
  };

  return (
    <div>
      <AgGridReact
            defaultColDef={{
              width: 150,
              editable: true,
              filter: 'agTextColumnFilter',
              floatingFilter: true,
              resizable: true,
            }}
            defaultColGroupDef={{ marryChildren: true }}
            columnTypes={{
              numberColumn: {
                width: 130,
                filter: 'agNumberColumnFilter',
              },
              medalColumn: {
                width: 100,
                columnGroupShow: 'open',
                filter: false,
              },
              nonEditableColumn: { editable: false },
              dateColumn: {
                filter: 'agDateColumnFilter',
                filterParams: {
                  comparator: function (filterLocalDateAtMidnight, cellValue) {
                    var dateParts = cellValue.split('/');
                    var day = Number(dateParts[0]);
                    var month = Number(dateParts[1]) - 1;
                    var year = Number(dateParts[2]);
                    var cellDate = new Date(year, month, day);
                    if (cellDate < filterLocalDateAtMidnight) {
                      return -1;
                    } else if (cellDate > filterLocalDateAtMidnight) {
                      return 1;
                    } else {
                      return 0;
                    }
                  },
                },
              },
            }}
            rowData={rowData}
            onGridReady={onGridReady}
          >
            <AgGridColumn sortable="true" headerName="Case Number" field="case_number" />
            <AgGridColumn sortable="true" headerName="Parent Case" field="parent_case" />
            <AgGridColumn sortable="true" headerName="Agent Name" field="sts_agent_name" type="numberColumn" />
            <AgGridColumn sortable="true" headerName="Type" field="Type" type="numberColumn" />
            <AgGridColumn sortable="true" headerName="Session Created" field="session_dt_created" type="numberColumn" />
            <AgGridColumn sortable="true" headerName="Case Severity" field="case_severity_level" type="numberColumn" />
            <AgGridColumn sortable="true" headerName="Session Time" field="session_time" type="numberColumn" />
            <AgGridColumn sortable="true" headerName="Account Name" field="account_name_formula" type="numberColumn" />
            <AgGridColumn sortable="true" headerName="Case support" field="case_support_mission" type="numberColumn" />
            <AgGridColumn sortable="true" headerName="Case Open Date" field="case_opened_date" type="date" />
            <AgGridColumn sortable="true" headerName="Status" field="status" type="numberColumn" />
            <AgGridColumn sortable="true" headerName="Product" field="product" type="numberColumn" />
            <AgGridColumn sortable="true" headerName="Case Status" field="case_status" type="numberColumn" />
            <AgGridColumn sortable="true" headerName="Case Owner" field="case_owner" type="numberColumn" />


                      </AgGridReact>
    </div>
  );
};

export default CaseViews;