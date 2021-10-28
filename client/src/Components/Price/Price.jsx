import { useEffect, useState } from "react";

const Price = () => {
  const [data, setData] = useState([]);
  let count = 0;
  useEffect(() => {
    fetch("http://127.0.0.1:8000/quoted/isetti", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }, []);
  return (
    <div>
      {data.map((val, key) => {
        count += parseInt(val["session_time"]);
      })}
      <h3>{count}</h3>
    </div>
  );
};

export default Price;
