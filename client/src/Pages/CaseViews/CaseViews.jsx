import { useState, useEffect } from "react";

const CaseViews = () => {
  const [caseView, setCaseView] = useState("");
  useEffect(() => {
    fetch("http://127.0.0.1:8000/caseview", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        res.forEach((element) => {
          console.log(element);
        });
      });
  }, []);

  return <div></div>;
};

export default CaseViews;
