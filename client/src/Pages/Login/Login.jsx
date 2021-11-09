import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
function Login() {
  const history = useHistory();
  const [name, setName] = useState("");
  return (
    <div className="loginMC">
      <div className="loginSC">
        {/*sub container*/}{" "}
        <div className="login">
          <h1> Login</h1>
          <form>
            <input
              type="text"
              className="uname"
              value={name}
              placeholder="Username"
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
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
