import { useState, useEffect } from "react";

const PEview = () => {
  const [pe, setPe] = useState("");
  useEffect(() => {
    fetch("http://127.0.0.1:8000/PEview", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        res.forEach((element) => {
          console.log(element);
        });
      });
  }, []);
  return <div></div>;
};

export default PEview;
