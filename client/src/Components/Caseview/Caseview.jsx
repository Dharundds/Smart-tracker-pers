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
          <h1>Case number : {dt.case_number} </h1>
          <h1>parent_case : {dt.parent_case} </h1>
          <h1>sts_agent_name : {dt.sts_agent_name}</h1>
          <h1>Type : {dt.Type} </h1>
          <h1>session_dt_created : {dt.session_dt_created}</h1>
          <h1>case_severity_level : {dt.case_severity_level}</h1>
          <h1>session_time : {dt.session_time}</h1>
          <h1>account_name_formula : {dt.account_name_formula}</h1>
          <h1>case_support_mission : {dt.case_support_mission}</h1>
          <h1>case_opened_date : {dt.case_opened_date}</h1>
          <h1>status : {dt.status}</h1>
          <h1>product : {dt.product}</h1>
          <h1>case_status : {dt.case_status}</h1>
          <h1>case_owner : {dt.case_owner}</h1>
        </div>
      ))}
    </>
  );
};

export default Caseview;
