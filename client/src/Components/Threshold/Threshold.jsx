import "./Threshold.css";
import { useState } from "react";
const Threshold = ({ value, name }) => {
  const [upd, setUpd] = useState(false);
  const [thres, setThres] = useState(value);

  const setThreshold = () => {
    fetch(`http://127.0.0.1:8000/accview/${name}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        thres,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="threshold">
      <input
        onChange={(e) => {
          thres !== value ? setUpd(true) : setUpd(false);
          setThres(e.target.value);
        }}
        defaultValue={value}
      />
      {upd ? (
        <button id="upd" onClick={setThreshold}>
          update
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Threshold;
