import { useState, useEffect } from "react";
import PEview from "../PEview";
import "./PEviews.css";
import Price from "../Price";
import { useHistory } from "react-router";

const PEviews = ({ name }) => {
  const history = useHistory();

  const [pe, setPe] = useState([]);
  const [rsc, setRsc] = useState([]);
  const [acc, setAcc] = useState([]);

  let PE_name = localStorage.getItem("myData");

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
        // setPe(res.PE);
        setRsc(res.RSC);
        setAcc(res.accounts);
        console.log(res.accounts);
      });
  }, []);
  return (
    <>
      <div className="container">
        <h1>{PE_name}</h1>
        {Object.keys(acc).map((val, key) => (
          <div key={key}>
            <h1>{val}</h1>
            {acc[val].map((i, key) => (
              <button
                key={key}
                onClick={() => {
                  history.push({
                    pathname: "/quote",
                    state: { name: i, pename: val },
                  });
                }}
              >
                {i}
              </button>
            ))}
          </div>
        ))}
        {/* {pe.length > 0 &&
          pe.map((val, key) => (
            <>
              <PEview
                key={key}
                pename={val["PE_name"]}
                nickname={val["cnickname"]}
              />
            </>
          ))}
        <hr />
        <hr />
        {/* {nickname.map((element, key) => (
          <h1 key={key}>{element}</h1>
        ))} */}
        {/* {rsc.length &&
          rsc.map((val, key) => (
            <div key={key}>
              <h3>{val.resource_name}</h3>
              <h4>{val.cost}</h4>
            </div>
          ))} */}
      </div>
    </>
  );
};

export default PEviews;
