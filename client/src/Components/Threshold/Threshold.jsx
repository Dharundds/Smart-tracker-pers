import "./Threshold.css";
import { useState } from "react";
const Threshold = ({value }) => {
const [upd,setUpd]= useState(false)
  

  return (
    <div className="threshold">
     <input onChange={
      ()=>{
        setUpd(true);

      } 
     } defaultValue={value}/>
     {
       upd ? 
         <button id="upd">update</button>
         :
         <></>
       }
    </div>

  );
};

export default Threshold;
