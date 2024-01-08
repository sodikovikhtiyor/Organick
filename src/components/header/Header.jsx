import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./Header.scss";
import "../sidebar/Sidebar.scss";
import Logo from "../../assets/Logo.webp";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import { Sidebar } from "../sidebar/Sidebar";
import CloseIcon from "@mui/icons-material/Close";
function Header() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="header">
      <div className="header-container">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <NavLink className="link" to="/">
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
          <MenuIcon className="menuIcon" onClick={showSidebar} />
          <nav  onClick={showSidebar} className={sidebar ? "sidebar nav-menu active" : "sidebar nav-menu"}>
            <ul className="nav-menu-items">
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <CloseIcon  onClick={showSidebar}/>
                </Link>
              </li>
              {Sidebar.map((item, index) => {
                return (
                  <li key={index} className="nav-text">
                    <Link to={item.path}>
                      <span>{item.title} {item.icon}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
