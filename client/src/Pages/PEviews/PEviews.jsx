import { useState, useEffect } from "react";
import PEview from "../../Components/PEview";

const PEviews = () => {
  const [pe, setPe] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/PEview", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })

      .then((res) => {
        console.log(res);
        setPe(res);
      });
  }, []);
  return (
    <>
      <div className="container">
        {/* {pe.map((value, key) => (
          <h1 key={key}>{value}</h1>
        ))} */}
        <h1>Hello</h1>
        {pe.length > 0 &&
          pe.map((val, key) => (
            <PEview
              key={key}
              pename={val["PE_name"]}
              nickname={val["cnickname"]}
            />
          ))}
      </div>
    </>
  );
};

export default PEviews;
