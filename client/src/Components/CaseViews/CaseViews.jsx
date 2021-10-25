import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading";
import "./CaseViews.css";
import Symbols from "../Symbols";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

const CaseViews = () => {
  const [isLoading, setisLoading] = useState(true);
  const [caseView, setCaseView] = useState({});
  useEffect(() => {
    fetch("http://127.0.0.1:8000/caseviews", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCaseView(res);
        setisLoading(false);
      });
  }, []);

  return (
    <div>
      {/* <div class="cards">
    <div class="card card-1">
      <h2 class="card__title" key={key}>case_number:{val["case_number"]}</h2>
      <p class="card__apply">
        parent_case:{val["parent_case"]} <i class="fas fa-arrow-right"></i></a>
      </p>
    </div>
    </div> */}
      {isLoading ? <Loading /> : null}
      {caseView.length > 0 &&
        caseView.map((val, key) => (
          <div className="cards">
            <div className="card card-1">
              <div class="card__icon">
                <FontAwesomeIcon icon={faBolt} />
              </div>
              <h2 className="card__title" key={key}>
                case_number:{val["case_number"]}
              </h2>
              <p className="card__apply">
                parent_case:{val["parent_case"]}{" "}
                <i className="fas fa-arrow-right"></i>
                <Link className="card__link" to={`/caseview/${val.id}`}>
                  readmore
                </Link>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CaseViews;
