import "./Navbar.css";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Symbols from "../Symbols";
import Dropdown from "../Dropdown";

function Navbar() {
  const location = useLocation();
  const history = useHistory();
  const [toggle, setToggle] = useState(false);
  const username = localStorage.getItem("username");
  if (localStorage.getItem("username") === null) {
    localStorage.setItem("username", location.state.name);
  } else if (localStorage.getItem("username") !== location.state.name) {
    localStorage.clear();
    localStorage.setItem("username", location.state.name);
  }
  return (
    <div className="NavBar">
      <div className="navBarContainer">
        <div className="logo">
          <h1
            onClick={() => {
              history.push("/home");
            }}
          >
            <Symbols.logo />
          </h1>
        </div>

        <div className="profileContainer">
          <p className="profileName">{username}</p>
          <div
            className="profilePicContainer"
            title={username}
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <Symbols.profile size="50px" id="profile" />
          </div>
        </div>
      </div>
      {toggle ? <Dropdown /> : null}
    </div>
  );
}

export default Navbar;
