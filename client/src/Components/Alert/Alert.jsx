import "./Alert.css";

const Alert = ({ severity, pe_name }) => {
  console.log(severity);
  if (severity === "med") {
    return (
      <div className="alert">
        <div className="orangeAlert">
          <p>{pe_name}You are hitting The consumption price</p>
        </div>
      </div>
    );
  }

  return (
    <div className="alert">
      <div className="redAlert">
        <p> have crossed the consumption price</p>
      </div>
    </div>
  );
};

export default Alert;
