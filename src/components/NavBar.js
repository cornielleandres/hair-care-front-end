import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="container">
      <div className="box">
        <Link to="/"> SIGN IN</Link>
        <Link to="/"> SIGN UP</Link>
        <Link to="/"> MY DASHBOARD</Link>
        <Link to="/"> LOG OUT</Link>
      </div>
    </nav>
  );
};

export default NavBar;
