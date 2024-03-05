import React from "react";
import { useNavigate } from "react-router-dom";

const Docs = () => {
  const Navigate = useNavigate();

  function navigateHandler() {
    Navigate(-1);
  }
  return (
    <div className="center">
      <div>Docs</div>
      <button onClick={navigateHandler}>Go Back To Contact Us</button>
    </div>
  );
};

export default Docs;
