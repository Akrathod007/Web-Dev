import React from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
  const Navigate = useNavigate();

  function navigateHandler() {
    Navigate("/contact");
  }
  return (
    <div className="center">
      <div>About Us</div>
      <button onClick={navigateHandler}>Go to Contact Us</button>
    </div>
  );
};

export default About;
