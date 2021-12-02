import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CaseView.css";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Alert from "../Alert/Alert.jsx";

const Caseview = () => {
  const location = useLocation();
  const accName = location.state.pename;
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/tot_consumption/${accName}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data.content);
      });
  }, []);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    //   fetch(`http://127.0.0.1:8000/caseview/${name}/${pename}`, {
    //     method: "GET",
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //   })
    //     .then((resp) => {
    //       return resp.json();
    //     })
    //     .then((data) => {
    //       setRowData(data);
    //     });
    // };

    /* USE THE CODE DOWN */
    fetch(`http://127.0.0.1:8000/accview/${accName}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })

      .then((res) => {
        // setPrice(res.RSC);
        // setAcc(res.acc_case);

        setRowData(res.acc_case);
        console.log(res.RSC, res.acc_case);
      });
  };
  function onBtExport() {
    gridApi.exportDataAsCsv();
  }

  return (
    <div className="caseView">
      <button
        onClick={() => {
          onBtExport();
        }}
      >
        Export table as CSV
      </button>
      <Alert severity="high" pe_name="name" />
      <div className="ag-theme-alpine" style={{ height: "800px" }}>
        <AgGridReact
          defaultColDef={{
            width: 210,
            editable: false,
            filter: "agTextColumnFilter",
            floatingFilter: true,
            resizable: true,
          }}
          defaultColGroupDef={{ marryChildren: true }}
          columnTypes={{
            numberColumn: {
              width: "auto",
              filter: "agNumberColumnFilter",
              // rowStyle: params => params.value > 80 ? { color: 'red' } : null
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
          {/* <AgGridColumn
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
          /> */}
          <AgGridColumn
            sortable="true"
            headerName="Cost"
            field="cost"
            editable="true"
          />
        </AgGridReact>
      </div>
    </div>
  );
};

export default Caseview;
