import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import Symbols from "../../Components/Symbols";
import CaseViews from "../../Components/CaseViews";
import PEviews from "../../Components/PEviews/PEviews";
import "./Home.css";
import Alert from "../../Components/Alert/Alert";
function Home() {
  const [view, setView] = useState("Accounts View");
  const username = localStorage.getItem("myData");

  return (
    <div class="home">
      <button
        className="togle"
        onClick={() => {
          if (view === "Case View") {
            setView("Accounts View");
          } else {
            setView("Case View");
          }
        }}
      >
        {view}
      </button>
      <Alert />
      <div className="homeMC">
        {view === "Case View" ? <PEviews name={username} /> : <CaseViews />}
      </div>
    </div>
  );
}
export default Home;
