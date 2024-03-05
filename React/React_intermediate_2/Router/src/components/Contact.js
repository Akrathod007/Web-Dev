import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const Navigate = useNavigate();

  function navigateHandler() {
    Navigate("/docs");
  }
  return (
    <div className="center">
      <div>Contact Us</div>
      <button onClick={navigateHandler}>Go to Docs</button>
    </div>
  );
};

export default Contact;
