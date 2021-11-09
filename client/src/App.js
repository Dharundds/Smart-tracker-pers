import { useState, useEffect } from "react";
import "./App.css";
import {
  Switch,
  Route,
  useHistory,
  useLocation,
  Redirect,
} from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import CaseViews from "./Components/CaseViews";
import PEviews from "./Components/PEviews";
import Caseview from "./Components/Caseview";
import Price from "./Components/Price";
import Settings from "./Components/Settings";

function App() {
  const [name, setName] = useState("");
  const [auth, setAuth] = useState(false);
  const history = useHistory();
  const location = useLocation();

  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route path="/login" component={Login} />
      <>
        <Navbar />
        <Route exact path="/home" component={Home} />
        <Route path="/caseviews" component={CaseViews} />
        <Route path="/peviews" component={PEviews} />
        <Route path="/caseview/:id" component={Caseview} />
        <Route path="/quote" component={Price} />
        <Route path="/settings" component={Settings} />
      </>
    </Switch>
  );
}

export default App;
