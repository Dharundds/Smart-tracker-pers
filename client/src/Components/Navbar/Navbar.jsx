import "./Navbar.css"
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Symbols from "../Symbols";

function Navbar(){
  const history=useHistory();
  
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
            
              </div>
              <p
                className="profileName"
                // onClick={() => {
                //   history.push("/profile");
                //}}
              >
              
               
              </p>
              <div
                className="profilePicContainer"
                // onClick={() => {
                //   history.push("/profile");
                //}}
              >
                  <Symbols.profile size="50px" id="profile"/> 
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
