import { useEffect, useState } from "react";

const Price = () => {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState();
  const [isFull, setIsFull] = useState(false);
  const [is70, setis70] = useState(false);
  let count = 0;
  let tot = 1;
  let cost = 0.0;
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
        setIsFull(res.full);
        setis70(res.is_70);
      });
  }, []);
  return (
    <div>
      <h1>hi</h1>
      {(() => {
        if (isFull) {
          console.log("hi");
          return <h1>100%</h1>;
        } else if (is70) {
          return <h1>70%</h1>;
        }
      })()}
    </div>
  );
};

export default Price;
