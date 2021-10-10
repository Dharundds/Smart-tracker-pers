import { useState,useEffect } from "react";
import './App.css'

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

  return (
    <div className="App">
    <center>
     <h1>hello</h1>
    <h1>Fetched from django ........</h1>
     <h2>{name}</h2>
     <h3>{age}</h3>
     </center>
    </div>
  );
}

export default App;
