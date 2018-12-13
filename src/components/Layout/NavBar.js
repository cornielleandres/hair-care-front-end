import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = props => {
  // todo = conditional rendering due to usertype
  return (
    <nav className="container">
      <div className="box">
        <NavLink to="/home">HOME</NavLink>
        <NavLink to="/dashboard">DASHBOARD</NavLink>
        <button onClick={props.handleLogOut}>Log Out</button>
      </div>
    </nav>
  );
};

export default NavBar;
