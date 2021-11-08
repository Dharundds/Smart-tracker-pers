import { useState } from "react";
import "./Dropdown.css";
import Symbols from "../Symbols";
const Dropdown = () =>{
return(
  
    <div className="dropdownMC">

        <div className="dropdown">
        <Symbols.profile size="100px"/>
        <div className="buttons">
            <button id="but1" > Edit profile</button>
            <button id="but2" > Set Threshold</button>
            <button id="logout" > Logout</button>


        </div>
        </div>
    </div>
)
}
export default Dropdown;