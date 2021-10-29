import { useEffect, useState } from "react";

const Price = () => {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState();
  let count = 0;
  let tot = 1;
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
        setData(res.timespt);
        // console.log(res.timespt);
        setPrice(res.price);
      });
  }, []);
  return (
    <div>
      {data.forEach((val) => {
        count += parseInt(val["session_time"]);
      })}
      {/* {(tot = count * parseFloat(price[0]["cost"].split("$")[1]))} */}
      <h3>{count}</h3>
      <h4>{(tot = count * parseFloat(price[0]["cost"].split("$")[1]))}</h4>
    </div>
  );
};

export default Price;
