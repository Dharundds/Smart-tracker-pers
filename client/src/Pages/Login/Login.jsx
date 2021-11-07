import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
function Login() {
  const history = useHistory();
  const [name, setName] = useState("");
  return (
    <div className="loginMC">
      {" "}
      {/*main container*/}
      <div className="loginSC">
        {/*sub container*/}
        <div className="login">
          <h1> Log in to IBM </h1>
          <form>
            <input
              type="text"
              className="uname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <button
              type="submit"
              disabled={!name}
              onClick={() => {
                history.push({
                  pathname: "/home",
                  state: { name: name },
                });
              }}
            >
              {" "}
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
