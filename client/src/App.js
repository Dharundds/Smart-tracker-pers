import "./index.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import CaseViews from "./Components/CaseViews";
import PEviews from "./Components/PEviews";
import Caseview from "./Components/Caseview";
import Settings from "./Components/Settings";
import { useState } from "react";

function App() {
  const [server, setServer] = useState(true);
  fetch('http://127.0.0.1:8000/')
  .then((resp) => {
     setServer(true);
   }, (e)=>{
     console.error(e)
          setServer(false);
   })
  .catch((error) => {
       console.log('network error: ' + error);
   })
   if (!server){
    return (
      <div className="serverError">
        <h1>We ran into a problem , is the server running?</h1>
      </div>
    );
   }
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route path="/login" component={Login} />
      <>
        <Navbar />
        <Route exact path="/home" component={Home} />
        <Route path="/caseviews" component={CaseViews} />
        <Route path="/peviews" component={PEviews} />
        <Route path="/caseview" component={Caseview} />
        <Route path="/settings" component={Settings} />
      </>
    </Switch>
  );
}

export default App;
