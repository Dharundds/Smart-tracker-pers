import { useState } from "react";
import CaseViews from "../../Components/CaseViews";
import PEviews from "../../Components/PEviews/PEviews";
import "./Home.css";
import Alert from "../../Components/Alert/Alert";
function Home() {
  const [view, setView] = useState("Account View");
  const username = localStorage.getItem("username");

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
