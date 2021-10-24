import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Symbols from "../../Components/Symbols";
import CaseViews from "../../Components/CaseViews";
import PEviews from "../../Components/PEviews/PEviews";
import "./Home.css";
function Home(){
    const history=useHistory();
    
    const[view,setView]=useState("account view");
    return (

        <div class="home">
    <button className="togle"
            onClick={()=>{
                if (view==="caseview"){            
                    setView("accview");
                }
                else{
                  setView("caseview");
                }
            }}>
                {view}
            </button>
        <div className="homeMC">
        {view==="caseview" ?
        <PEviews/>
        :
        <CaseViews/>
        }
         
       
        </div>

        
         
        </div>
    )
}
export default Home;