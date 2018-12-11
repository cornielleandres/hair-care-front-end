import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="container">
      <div className="box">
        <NavLink to="/signup"> SIGN UP</NavLink>
        <NavLink to="/dashboard">DASHBOARD</NavLink>
        <NavLink to="/"> LOG OUT</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
