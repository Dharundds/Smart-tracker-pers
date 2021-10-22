import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const CaseViews = () => {
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
        console.log(res);
        console.log(caseView);
      });
  }, []);

  return (
    <div>
      {caseView.length > 0 &&
        caseView.map((val, key) => (
          <>
            <h1 key={key}>case_number:{val["case_number"]}</h1>
            <br />
            <p style={{ color: "red" }}> parent_case:{val["parent_case"]}</p>
            <button>
              <Link to={`/caseview/${val.id}`}> readmore </Link>
            </button>
          </>
        ))}
    </div>
  );
};

export default CaseViews;
