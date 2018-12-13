import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  a, button {
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px 5px;
    background-color: white;
    text-decoration: none;

    &:hover {
      background-color: #444;
      color: white;
      cursor: pointer;
    }
  }
`;

const NavBar = props => {
  return (
    <StyledNavBar>
        <NavLink to="/home">HOME</NavLink>
        <NavLink to="/stylists">STYLISTS</NavLink>
        <button onClick={props.handleLogOut}>LOG OUT</button>
    </StyledNavBar>
  );
};

export default NavBar;
