import "./Navbar.css";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Symbols from "../Symbols";
import logo from "../../Assets/logo.png";
import Dropdown from "../Dropdown/Dropdown";

function Navbar() {
  const location = useLocation();
  const history = useHistory();
  const [toggle, setToggle] = useState(false);
  const username = localStorage.getItem("myData");
  if (localStorage.getItem("myData") === null) {
    localStorage.setItem("myData", location.state.name);
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
            <img src={logo} alt="logo" />
          </h1>
        </div>
        <p className="profileName">{username}</p>
        <div className="profileContainer">
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
