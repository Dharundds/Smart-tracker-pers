import { useState } from "react";
import { useHistory } from "react-router";
import "./Dropdown.css";
import Symbols from "../Symbols";
const Dropdown = () => {
  const history = useHistory();
  return (
    <div className="dropdownMC">
      <div className="dropdown">
        <Symbols.profile size="100px" />
        <div className="buttons">
          <button id="but1"> Edit profile</button>
          <button id="but2"> Set Threshold</button>
          <button
            id="logout"
            onClick={() => {
              localStorage.clear();
              history.push("/login");
            }}
          >
            {" "}
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
