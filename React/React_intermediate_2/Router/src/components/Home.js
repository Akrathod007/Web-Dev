import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate();

  function navigateHandler() {
    Navigate("/about");
  }
  return (
    <div className="center">
      <div>Home</div>
      <button onClick={navigateHandler}>Go to About Us</button>
    </div>
  );
};

export default Home;
