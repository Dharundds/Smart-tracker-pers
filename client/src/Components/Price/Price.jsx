import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Price = () => {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState();
  const [isFull, setIsFull] = useState(false);
  const [is70, setis70] = useState(false);
  const [value, setValue] = useState(50);
  const location = useLocation();
  const name = location.state.name || "";
  const pename = location.state.pename || "";
  console.log(name.split("|")[1]);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/tot_consumption/${name}/${pename}`, {
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

  const handleSetthreshold = async (threshold) => {
    const content = {
      threshold,
    };
    await fetch(`http://127.0.0.1:8000/tot_consumption/${name}/${pename}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(content),
    }).then((res) => res.json());
  };

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
      <div className="threshold-container">
        <h1>Set Threshold</h1>
        <div className="set-threshold">
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          value:{value}
          <button onClick={() => handleSetthreshold(value)}>Set</button>
        </div>
      </div>
    </div>
  );
};

export default Price;
