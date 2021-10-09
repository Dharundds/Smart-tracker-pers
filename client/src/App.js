import { useState } from "react";

function App() {
  const [name,setName] = useState("")
  const [age,setAge] = useState("")

  const handleRequest = async ()=>{
    const res = await fetch('http://127.0.0.1:8000/');
    const data = await res.json();
    console.log(data)
  }

  return (
    <div className="App">
     <h1>hello</h1>
     <button onClick={handleRequest}>Click</button>
     {/* <h1>{name}:{age}</h1> */}
    </div>
  );
}

export default App;
