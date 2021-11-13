import { useState } from "react";
import { useHistory } from "react-router";
import "./Home.css";
import Alert from "../../Components/Alert/Alert";
function Home() {
  const [view, setView] = useState("Account View");
  const username = localStorage.getItem("username");
  const history = useHistory();
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
      <Alert />
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
