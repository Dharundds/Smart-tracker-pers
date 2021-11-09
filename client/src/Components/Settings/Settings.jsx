import { useState } from "react";

const Settings = () => {
  let username = localStorage.getItem("myData");

  const [email, setEmail] = useState("");
  const [value, setValue] = useState(50);
  const handleOnUpdateEmail = async (email) => {
    const content = {
      email,
    };
    await fetch("http://127.0.0.1:8000/updateEmail", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(content),
    }).then((res) => res.json());
  };

  const handleSetthreshold = async (threshold) => {
    const content = {
      threshold,
    };
    await fetch("http://127.0.0.1:8000/setThreshold", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(content),
    }).then((res) => res.json());
  };

  return (
    <div>
      <div className="profile-container">
        <h1>Profile</h1>
        <form>
          Username: <input type="text" value={username} disabled />
          Email :{" "}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <button
            type="button"
            onClick={() => handleOnUpdateEmail(email)}
            disabled={!email}
          >
            Update Email
          </button>
          {email}
        </form>
      </div>

      <div className="threshold-container">
        <h1>Set Threshold</h1>
        <div className="set-threshold">
          <input
            type="range"
            min="1"
            max="100"
            value={value}
            class="slider"
            onChange={(e) => setValue(e.target.value)}
          />
          value:{value}
          <button onClick={() => handleSetthreshold(value)}>Set</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
