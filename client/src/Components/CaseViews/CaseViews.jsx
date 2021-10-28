import { useState, useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading";
import "./CaseViews.css";
import Symbols from "../Symbols";
import { useTable, useExpanded } from "react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
function Table({ columns: userColumns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { expanded },
  } = useTable(
    {
      columns: userColumns,
      data,
    },
    useExpanded // Use the useExpanded plugin hook
  );

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <div>Showing the first 20 results of {rows.length} rows</div>
      <pre>
        <code>{JSON.stringify({ expanded: expanded }, null, 2)}</code>
      </pre>
    </>
  );
}
const CaseViews = () => {
  const [isLoading, setisLoading] = useState(true);
  const [caseView, setCaseView] = useState({});
  useEffect(() => {
    fetch("http://127.0.0.1:8000/caseviews", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCaseView(res);
        setisLoading(false);
      });
  }, []);

  const cases = useMemo(() => caseView);
  const columns = useMemo(
    () => [
      {
        // Build our expander columne
        id: "expander", // Make sure it has an ID
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
          <span {...getToggleAllRowsExpandedProps()}>
            {isAllRowsExpanded ? "👇" : "👉"}
          </span>
        ),
        Cell: ({ row }) =>
          // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
          // to build the toggle for expanding a row
          row.canExpand ? (
            <span
              {...row.getToggleRowExpandedProps({
                style: {
                  // We can even use the row.depth property
                  // and paddingLeft to indicate the depth
                  // of the row
                  paddingLeft: `${row.depth * 2}rem`,
                },
              })}
            >
              {row.isExpanded ? "👇" : "👉"}
            </span>
          ) : null,
      },
      {
        Header: "Name",
        columns: [
          {
            Header: "Case Number",
            accessor: "case_number",
          },
          {
            Header: "Parent Case",
            accessor: "parent_case",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Agent name",
            accessor: "sts_agent_name",
          },
          {
            Header: "severity",
            accessor: "case_severity_level",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "case_owner",
            accessor: "case_owner",
          },
        ],
      },
    ],
    []
  );
  return (
    <div>
      {/* <div class="cards">
    <div class="card card-1">
      <h2 class="card__title" key={key}>case_number:{val["case_number"]}</h2>
      <p class="card__apply">
        parent_case:{val["parent_case"]} <i class="fas fa-arrow-right"></i></a>
      </p>
    </div>
    </div> */}
      {isLoading ? <Symbols.load /> : <Table columns={columns} data={cases} />}
    </div>
  );
};

export default CaseViews;
