import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
function Login() {
  const history = useHistory();
  const [name, setName] = useState("");
  return (
    <div>
      <div className="loginMC">
        {" "}
        {/*main container*/}
        <div className="loginSC">
          {/*sub container*/}
          <div className="login">
            <form>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <button
                type="submit"
                onClick={() => {
                  history.push({
                    pathname: "/home",
                    state: { name: name },
                  });
                }}
              >
                {" "}
                click
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
