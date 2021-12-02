import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Home.css";
import Threshold from "../../Components/Threshold";
function Home() {
  const username = localStorage.getItem("username");
  const history = useHistory();
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []);
  return (
    <div class="home">
      <button
        onClick={() => {
          history.push("/caseviews");
        }}
      >
        Case View
      </button>
      <button
        onClick={() => {
          history.push("/peviews");
        }}
      >
        Accounts View
      </button>
      
      {/* <div className="homeMC">
        {view === "Case View" ? <PEviews name={username} /> : <CaseViews />}
      </div> */}
    </div>
  );
}
export default Home;
// onClick={() => {
//   if (view === "Case View") {
//     setView("Accounts View");
//   } else {
//     setView("Case View");
//   }
// }}
