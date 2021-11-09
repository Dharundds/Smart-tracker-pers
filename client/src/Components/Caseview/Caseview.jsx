import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CaseView.css";

const Caseview = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const name = location.state.name || "";
  const pename = location.state.pename || "";
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/caseview/${name}/${pename}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  }, []);
  return (
    <>
      {data.map((dt, key) => (
        <div key={key}>
          <hr /> <hr /> <br />
          <div className="caseview">
            <h1>
              <span class="viewtitle">Case number : </span> {dt.case_number}
            </h1>
            <h1>
              <span class="viewtitle">parent_case : </span> {dt.parent_case}
            </h1>
            <h1>
              <span class="viewtitle">sts_agent_name : </span>{" "}
              {dt.sts_agent_name}
            </h1>
            <h1>
              <span class="viewtitle">Type : </span> {dt.Type}
            </h1>
            <h1>
              <span class="viewtitle">session_dt_created : </span>
              {dt.session_dt_created}
            </h1>
            <h1>
              <span class="viewtitle">case_severity_level : </span>
              {dt.case_severity_level}
            </h1>
            <h1>
              <span class="viewtitle">session_time </span> : {dt.session_time}
            </h1>
            <h1>
              <span class="viewtitle">account_name_formula : </span>
              {dt.account_name_formula}
            </h1>
            <h1>
              <span class="viewtitle">case_support_mission : </span>
              {dt.case_support_mission}
            </h1>
            <h1>
              <span class="viewtitle">case_opened_date </span>:{" "}
              {dt.case_opened_date}
            </h1>
            <h1>
              <span class="viewtitle">status : </span>
              {dt.status}
            </h1>
            <h1>
              <span class="viewtitle">product : </span>
              {dt.product}
            </h1>
            <h1>
              <span class="viewtitle">case_status : </span> {dt.case_status}
            </h1>
            <h1>
              <span class="viewtitle">case_owner : </span>
              {dt.case_owner}
            </h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default Caseview;
