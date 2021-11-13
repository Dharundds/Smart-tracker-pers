import Symbols from "../Symbols";
import "./Card.css";
const Card = ({ accName }) => {
  return (
    <div className="cardMC">
      <div className="card">
        <Symbols.profile size="100px" />
        <h1>{accName}</h1>
      </div>
    </div>
  );
};

export default Card;
