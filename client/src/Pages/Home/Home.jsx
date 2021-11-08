import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import Symbols from "../../Components/Symbols";
import CaseViews from "../../Components/CaseViews";
import PEviews from "../../Components/PEviews/PEviews";
import "./Home.css";
function Home() {
  const history = useHistory();
  const location = useLocation();
  const [view, setView] = useState("Accounts View");
  const [username, setUsername] = useState(location.state.name);

  // console.log(location.state.name);
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
