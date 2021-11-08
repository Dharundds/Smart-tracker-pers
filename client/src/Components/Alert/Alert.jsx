import "./Alert.css";
const Alert = () => {
  return (
    <div className="alert">
      <div className="orangeAlert">
        <p>You are hitting The consumption price</p>
        <a>readmore!</a>
      </div>
      <br />
      <div className="redAlert">
        <p>You have crossed the consumption price</p>
        <a>readmore!</a>
      </div>
    </div>
  );
};

export default Alert;
