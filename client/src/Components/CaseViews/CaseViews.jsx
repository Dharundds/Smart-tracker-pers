import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading";
import "./CaseViews.css";
import Symbols from "../Symbols";
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
        console.log(res);
        console.log(caseView);
      });
  }, []);

  return (
    <div>
      {isLoading ? <Loading /> : null}
      {caseView.length > 0 &&
        caseView.map((val, key) => (
          <div className="case">
            <h1 key={key}>case_number:{val["case_number"]}</h1>
            <br />
            <p style={{ color: "red" }}> parent_case:{val["parent_case"]}</p>
            <button>
              <Link to={`/caseview/${val.id}`}> readmore </Link>
            </button>
          </div>
        ))}
    </div>
  );
};

export default CaseViews;
