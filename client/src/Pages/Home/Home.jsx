import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import Symbols from "../../Components/Symbols";
import CaseViews from "../../Components/CaseViews";
import PEviews from "../../Components/PEviews/PEviews";
import "./Home.css";
function Home() {
  const history = useHistory();
  const location = useLocation();

  if (localStorage.getItem("myData") == null) {
    localStorage.setItem("myData", location.state.name);
  }
  const [view, setView] = useState("Accounts View");
  const [username, setUsername] = useState(localStorage.getItem("myData"));

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
      <div className="homeMC">
        {view === "Case View" ? <PEviews name={username} /> : <CaseViews />}
      </div>
    </div>
  );
}
export default Home;
