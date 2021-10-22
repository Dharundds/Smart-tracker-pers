import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Caseview = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/caseview/${id}`, {
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
        <div className="caseview" key={key}>
          <h1>Case number</h1> : {dt.case_number}
          <h1>parent_case</h1> : {dt.parent_case}
          <h1>sts_agent_name</h1> : {dt.sts_agent_name}
          <h1>Type</h1> : {dt.Type}
          <h1>session_dt_created</h1> : {dt.session_dt_created}
          <h1>case_severity_level</h1> : {dt.case_severity_level}
          <h1>session_time</h1> : {dt.session_time}
          <h1>account_name_formula</h1> : {dt.account_name_formula}
          <h1>case_support_mission</h1> : {dt.case_support_mission}
          <h1>case_opened_date</h1> : {dt.case_opened_date}
          <h1>status</h1> : {dt.status}
          <h1>product</h1> : {dt.product}
          <h1>case_status</h1> : {dt.case_status}
          <h1>case_owner</h1> : {dt.case_owner}
        </div>
      ))}
    </>
  );
};

export default Caseview;
