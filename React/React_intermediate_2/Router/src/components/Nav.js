import React from "react";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            {/* <Link to="/">Home</Link> */}
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            {/* <Link to="/about">About Us</Link> */}
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            {/* <NavLink to="/contact">Contact Us</NavLink> */}
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li>
            {/* <Link to="/docs">Docs</Link> */}
            <NavLink to="/docs">Docs</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
