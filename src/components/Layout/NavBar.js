import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = props => {
  return (
    <nav className="container">
      <div className="box">
        <NavLink to="/home">HOME</NavLink>
        <NavLink to="/stylists">STYLISTS</NavLink>
        <button onClick={props.handleLogOut}>Log Out</button>
      </div>
    </nav>
  );
};

export default NavBar;
