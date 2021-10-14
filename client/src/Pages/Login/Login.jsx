import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
function Login() {
  const history= useHistory();
return (
    <div>
    <div className="loginMC"> {/*main container*/}
      <div className="loginSC">{/*sub container*/}
        <div className="login">
          <form >
                    <input type="text"></input>
                    <button type="submit" onClick={() => {
                    history.push("home");
                  }} > click</button>
                  </form>
        </div>
      </div>
    </div>
    </div>
  );

    }
export default Login;