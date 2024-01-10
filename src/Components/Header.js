import React, { useState } from "react"
import FoodLogo from '../Assets/Food-logo.png'
import { NavLink } from 'react-router-dom'
import { NavItem } from "reactstrap"

const Header = () => {
  return (
    <>
    <main className="Header">
        <img className="FoodLogo" src={FoodLogo} />
        <NavItem><NavLink to="/">Home</NavLink></NavItem>
        <NavItem><NavLink to="/about-us">About Us</NavLink></NavItem>
        <NavItem><NavLink to="/signup">Sign Up</NavLink></NavItem>
        <NavItem><NavLink to="/signin">Sign In</NavLink></NavItem>
    </main>
    </>
  )
}


export default Header
