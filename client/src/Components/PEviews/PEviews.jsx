import { useState, useEffect } from "react";
import PEview from "../PEview";
import "./PEviews.css";
const PEviews = ({ name }) => {
  const [pe, setPe] = useState([]);
  const [per, setPer] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/accview/${name}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })

      .then((res) => {
        setPe(res.PE);
        setPer(res.PER);
      });
  }, []);
  return (
    <>
      <div className="container">
        {/* {pe.map((value, key) => (
          <h1 key={key}>{value}</h1>
        ))} */}
        {pe.length > 0 &&
          pe.map((val, key) => (
            <PEview
              key={key}
              pename={val["PE_name"]}
              nickname={val["cnickname"]}
            />
          ))}
        <hr />
        <hr />
        {per.length &&
          per.map((val, key) => (
            <div key={key}>
              <h3>{val.resource_name}</h3>
              <h4>{val.cost}</h4>
            </div>
          ))}
      </div>
    </>
  );
};

export default PEviews;
