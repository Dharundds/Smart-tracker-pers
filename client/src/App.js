import "./index.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import CaseViews from "./Components/CaseViews";
import PEviews from "./Components/PEviews";
import Caseview from "./Components/Caseview";
import Settings from "./Components/Settings";

function App() {
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
