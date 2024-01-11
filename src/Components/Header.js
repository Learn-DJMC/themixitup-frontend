import React, { useState } from "react";
import FoodLogo from "../Assets/Food-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { NavItem } from "reactstrap";

const Header = ({ currentUser, signout }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    signout();
    navigate("/");
  };
  return (
    <>
      <main className="Header">
        <img className="FoodLogo" src={FoodLogo} />
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about-us">About Us</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/recipes">Recipes</NavLink>
        </NavItem>
        {!currentUser && (
          <>
            <NavItem>
              <NavLink to="/signup">Sign Up</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signin">Sign In</NavLink>
            </NavItem>
          </>
        )}
        {currentUser && (
          <>
            <NavItem>
              <NavLink to="/signout">Sign Out</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/recipes-protected-index">My Recipes</NavLink>
            </NavItem>
          </>
        )}
      </main>
    </>
  );
};

export default Header;
