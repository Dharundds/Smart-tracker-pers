import { useState } from "react";
import "./Settings.css";
const Settings = () => {
  let username = localStorage.getItem("username");

  const [email, setEmail] = useState("");

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

  return (
    <div className="settingsMC">
      <div className="settingsSC">
        <div className="settings">
          <h1>Profile</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              value={username}
              disabled
              id="username"
            />
            <input
              type="email"
              value={email}
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
          </form>
          <button
            type="button"
            onClick={() => handleOnUpdateEmail(email)}
            disabled={!email}
          >
            Update Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
