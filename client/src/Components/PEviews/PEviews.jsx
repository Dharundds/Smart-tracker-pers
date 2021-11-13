import { useState, useEffect } from "react";
import "./PEviews.css";
import { useHistory } from "react-router";
import Symbols from "../Symbols";
import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
const PEviews = () => {
  const history = useHistory();
  const [price, setPrice] = useState([]);
  const [acc, setAcc] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [Key, setKey] = useState(0);
  const username = localStorage.getItem("username");

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setAcc(res);
      });
  }, []);
  return (
    <div className="peviews">
      <div className="peName">
        <h1 title="Name">
          Name:&nbsp; <span> {username}</span>
        </h1>
      </div>
      <div className="peAcc">
        {acc.map((val, key) => (
          <div
            onClick={() => {
              history.push({
                pathname: "/caseview",
                state: {  pename: val.cnickname },
              });
            }}
          >
            <Card accName={val.cnickname} key={key}></Card>
          </div>
        ))}
        {/* {Object.keys(acc).map((val, key) => (
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
        ))} */}
      </div>
    </div>
  );
};
export default PEviews;
