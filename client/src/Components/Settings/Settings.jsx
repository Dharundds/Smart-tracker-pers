import { useState } from "react";

const Settings = () => {
  let username = localStorage.getItem("myData");

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
    </div>
  );
};

export default Settings;
