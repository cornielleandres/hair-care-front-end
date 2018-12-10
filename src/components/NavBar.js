import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="container">
      <div className="box">
        <NavLink to="/signUp"> SIGN UP</NavLink>
        <NavLink to="/dashBoard"> MY DASHBOARD</NavLink>
        <NavLink to="/logIn"> LOG OUT</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
