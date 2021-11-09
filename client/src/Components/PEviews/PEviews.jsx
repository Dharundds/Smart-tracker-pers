import { useState, useEffect } from "react";
import "./PEviews.css";
import "react-complex-tree/lib/style.css";
import { useHistory } from "react-router";
const PEviews = ({ name }) => {
  const history = useHistory();
  const [pe, setPe] = useState([]);
  const [rsc, setRsc] = useState([]);
  const [acc, setAcc] = useState([]);
  const PE_name = localStorage.getItem("myData");
  useEffect(async () => {
    await fetch(`http://127.0.0.1:8000/accview/${name}`, {
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
        setRsc(res.RSC);
        setAcc(res.accounts);
      });
  }, []);

  return (
    <div className="peviews">
      <div className="peName">
        <h1 title="Name">
          Name:&nbsp; <span> {PE_name}</span>
        </h1>
      </div>
      <div className="peAcc">
        {Object.keys(acc).map((val, key) => (
          <div key={key}>
            <h2 title="Account name">
              Account Name:&nbsp; <span>{val}</span>
            </h2>
            {acc[val].map((i, key) => (
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
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default PEviews;
