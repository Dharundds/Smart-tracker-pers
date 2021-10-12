import { useState,useEffect } from "react";
import './App.css'
import Login from "./Pages/Login";
function App() {
  const [name,setName] = useState("")
  const [age,setAge] = useState("")

  useEffect(()=>{
    fetch('http://127.0.0.1:8000/',{
      method:'GET',
      headers:{
        'Content-type':'application/json'
      }
    }).then((res)=>
    { 
      return res.json()
    }).then((res)=> {
      res.forEach(element => {
       setName(element.name)
       setAge(element.age)
      });
    })
  },[])
  
useEffect(()=>{
  fetch('http://127.0.0.1:8000/getcaseview',{
    method:"GET",
    headers:{
      'Content-type':'application/json'
    }
  }).then((res)=>{
    return res.json()
  }).then((res)=>{
    res.forEach((res)=>console.log(res.case_number))
  })
},[])


  return (
    <div className="App">
   <Login />
    </div>
  );
}

export default App;
