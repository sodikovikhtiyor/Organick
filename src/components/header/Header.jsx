import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.scss";
import Logo from "../../assets/Logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="logo">
            <img src={Logo} alt="logo" />
          <NavLink className='link' to="/">
            <h2>Organick</h2>
          </NavLink>
          <Navbar />
        </div>
        <div className="icons">
          <div className="headerIconSearch">
            <input type="search" />
            <SearchIcon className="searchIcon" />
          </div>
          <div className="headerIconCard">
            <ShoppingCartIcon className="cardIcon" />
            <p>
              <span>Card</span> (0)
            </p>
          </div>
          <MenuIcon className="menuIcon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
