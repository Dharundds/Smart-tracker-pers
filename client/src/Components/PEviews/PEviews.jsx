import { useState, useEffect } from "react";
import "./PEviews.css";
import { useHistory } from "react-router";
import Symbols from "../Symbols";

const PEviews = () => {
  const history = useHistory();
  const [price, setPrice] = useState([]);
  const [acc, setAcc] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [Key, setKey] = useState(0);
  const PE_name = localStorage.getItem("username");
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/accview/${PE_name}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })

      .then((res) => {
        setPrice(res.RSC);
        setAcc(res.acc_case);
        console.log(res.RSC, res.acc_case);
      });
  }, []);

  return (
    <div className="peviews">
      <div className="peName">
        <h1 title="Name">
          Name:&nbsp; <span> {PE_name}</span>
        </h1>
      </div>
      {/* <div className="peAcc">
        {Object.keys(acc).map((val, key) => (
          <div className="accName" key={key}>
            <h2 title="Account name">
              Account Name:&nbsp; <span>{val}</span>
            </h2>
            {!isVisible ? (
              <div
                onClick={() => {
                  setIsVisible(true);
                  setKey(key);
                }}
              >
                <Symbols.Add size={24} />
              </div>
            ) : (
              <div
                onClick={() => {
                  setIsVisible(false);
                  setKey(key);
                }}
              >
                <Symbols.Minus size={24} />
              </div>
            )}
            <div>
              {isVisible && Key === key ? (
                acc[val].map((i, key) => (
                  <a
                    key={key}
                    onClick={() => {
                      history.push({
                        pathname: "/caseview",
                        state: { name: i, pename: val },
                      });
                    }}
                  >
                    {i}
                  </a>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
      </div> */}
      {price}
      {acc}
    </div>
  );
};
export default PEviews;
