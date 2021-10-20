import "./PEview.css";

const PEview = ({ pename, nickname }) => {
  return (
    <div className="PE">
      <h1 className="pename">PE name: {pename}</h1>
      <h1 className="nickname">Nickname: {nickname} </h1>
    </div>
  );
};
export default PEview;
