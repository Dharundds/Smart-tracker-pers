import "./Navbar.css";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Symbols from "../Symbols";
import logo from "../../Assets/logo.png";

function Navbar() {
  const location = useLocation();
  const history = useHistory();
  let username = localStorage.getItem("myData");

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

        <div className="profileContainer"></div>
        <p
          className="profileName"
          // onClick={() => {
          //   history.push("/profile");
          //}}
        >
          {username}
        </p>
        <div
          className="profilePicContainer"
          // onClick={() => {
          //   history.push("/profile");
          //}}
          title={username}
        >
          <Symbols.profile size="40px" id="profile" />
          {/* <img
                  src={profilePic}
                  alt=""
                  onDragStart={(e) => {
                    e.preventDefault();
                  }}
                  onContextMenu={(e) => {
                    e.preventDefault();
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                /> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
