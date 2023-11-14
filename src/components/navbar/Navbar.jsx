import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Navbar() {
  // const navLinkStyles = ({ isActive }) => {
  //   return {
  //     fontWeight: isActive ? "bold" : "normal",
  //     textDecoration: isActive ? "none" : "underline",
  //   };
  // };
  return (
    <nav className="primaryNav">
      <NavLink className='navlink' to="/" >
        Home
      </NavLink>
      <NavLink className='navlink' to="/about">
        About
      </NavLink>
      <NavLink className='navlink pagesLink' to="/pages">
        Pages
        <KeyboardArrowDownIcon className="icon"/>
      </NavLink>
      <NavLink className='navlink' to="/shop">
        Shop
      </NavLink>
      <NavLink className='navlink' to="/project" >
        Project
      </NavLink>
      <NavLink className='navlink' to="/news" >
        News
      </NavLink>
    </nav>
  );
}

export default Navbar;
