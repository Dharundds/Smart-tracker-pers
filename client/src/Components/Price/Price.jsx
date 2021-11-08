import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Price = () => {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState();
  const [isFull, setIsFull] = useState(false);
  const [is70, setis70] = useState(false);

  const location = useLocation();
  const name = location.state.name || "";
  const pename = location.state.pename || "";
  console.log(name.split("|")[1]);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/quoted/${name}/${pename}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // setData(res.timespt);
        // // console.log(res.timespt);
        // setPrice(res.price);
        setIsFull(res.full);
        setis70(res.is_70);
        console.log(res);
      });
  }, []);
  return (
    <div>
      <h1>{name}</h1>
      {/* {(() => {
        if (isFull) {
          return <h1>100%</h1>;
        } else if (is70) {
          return <h1>70%</h1>;
        }
      })()} */}
    </div>
  );
};

export default Price;
