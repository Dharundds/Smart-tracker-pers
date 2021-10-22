import { useState,useEffect } from "react";
import './App.css'
import { Switch, Route, useHistory, useLocation , Redirect } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import CaseViews from "./Pages/CaseViews";
import PEviews from "./Pages/PEviews";
import Caseview from "./Components/Caseview";

function App() {

  const [name,setName] = useState("")
  const [auth,setAuth] = useState(false)
  const history = useHistory();
  const location = useLocation();
  // useEffect(() => {
  //   if ( auth) {
  //     history.push( "login");
  //   }
  //   if (location.pathname === "/home") {
  //     setAuth(true);
  //     history.push("/home");
  //   }
  // });
  //const location = useLocation();
//   useEffect(()=>{
//     fetch('http://127.0.0.1:8000/',{
//       method:'GET',
//       headers:{
//         'Content-type':'application/json'
//       }
//     }).then((res)=>
//     { 
//       return res.json()
//     }).then((res)=> {
//       res.forEach(element => {
//        setName(element.name)
//        setAge(element.age)
//       });
//     })
//   },[])
  
// useEffect(()=>{
//   fetch('http://127.0.0.1:8000/getcaseview',{
//     method:"GET",
//     headers:{
//       'Content-type':'application/json'
//     }
//   }).then((res)=>{
//     return res.json()
//   }).then((res)=>{
//     res.forEach((res)=>console.log(res.case_number))
//   })
// },[])


  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
    <Route path="/login" component={Login} />
    <>
      <Navbar />
      <Route exact path="/home" component={Home} />
      <Route path="/caseviews" component={CaseViews} />
      <Route path="/peviews" component={PEviews} />
      <Route path='/caseview/:id' component={Caseview} />
    </>
  </Switch>
   
  );
}

export default App;
