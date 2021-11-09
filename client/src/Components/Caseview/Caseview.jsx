import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./CaseView.css";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const Caseview = () => {
  const location = useLocation();
  const name = location.state.name || "";
  const pename = location.state.pename || "";
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState([]);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
    console.log(gridApi);
    console.log(pename);

    fetch(`http://127.0.0.1:8000/caseview/${name}/${pename}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setRowData(data);
      });
  };

  return (
    <div className="ag-theme-alpine" style={{ height: "800px" }}>
      <AgGridReact
        defaultColDef={{
          width: 140,
          editable: false,
          filter: "agTextColumnFilter",
          floatingFilter: true,
          resizable: true,
        }}
        defaultColGroupDef={{ marryChildren: true }}
        columnTypes={{
          numberColumn: {
            width: 130,
            filter: "agNumberColumnFilter",
          },
          medalColumn: {
            width: 100,
            columnGroupShow: "open",
            filter: false,
          },
          nonEditableColumn: { editable: false },
          dateColumn: {
            filter: "agDateColumnFilter",
            filterParams: {
              comparator: function (filterLocalDateAtMidnight, cellValue) {
                var dateParts = cellValue.split("/");
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
        onGridReady={onGridReady}
        rowData={rowData}
        rowSelection="multiple"
      >
        <AgGridColumn
          sortable="true"
          headerName="Case Number"
          field="case_number"
        />
        <AgGridColumn
          sortable="true"
          headerName="Parent Case"
          field="parent_case"
        />
        <AgGridColumn
          sortable="true"
          headerName="Agent Name"
          field="sts_agent_name"
        />
        <AgGridColumn sortable="true" headerName="Type" field="Type" />
        <AgGridColumn
          sortable="true"
          headerName="Session Created"
          field="session_dt_created"
          type="dateColumn"
        />
        <AgGridColumn
          sortable="true"
          headerName="Case Severity"
          field="case_severity_level"
          type="numberColumn"
        />
        <AgGridColumn
          sortable="true"
          headerName="Session Time"
          field="session_time"
          type="numberColumn"
        />
        <AgGridColumn
          sortable="true"
          headerName="Account Name"
          field="account_name_formula"
        />
        <AgGridColumn
          sortable="true"
          headerName="Case support"
          field="case_support_mission"
        />
        <AgGridColumn
          sortable="true"
          headerName="Case Open Date"
          field="case_opened_date"
          type="dateColumn"
        />
        <AgGridColumn
          sortable="true"
          headerName="Status"
          field="status"
          type="numberColumn"
        />
        <AgGridColumn sortable="true" headerName="Product" field="product" />
        <AgGridColumn
          sortable="true"
          headerName="Case Status"
          field="case_status"
        />
        <AgGridColumn
          sortable="true"
          headerName="Case Owner"
          field="case_owner"
          width="110"
        />
      </AgGridReact>
    </div>
  );
};

export default Caseview;
