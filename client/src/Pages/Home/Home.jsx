import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import Symbols from "../../Components/Symbols";
import CaseViews from "../../Components/CaseViews";
import PEviews from "../../Components/PEviews/PEviews";
import "./Home.css";
function Home() {
  const history = useHistory();
  const location = useLocation();
  let username = location.state.name;
  //   console.log(location.state.name);
  const [view, setView] = useState("account view");
  return (
    <div class="home">
      <button
        className="togle"
        onClick={() => {
          if (view === "caseview") {
            setView("accview");
          } else {
            setView("caseview");
          }
        }}
      >
        {view}
      </button>
      <div className="homeMC">
        {view === "caseview" ? <PEviews name={username} /> : <CaseViews />}
      </div>
    </div>
  );
}
export default Home;
