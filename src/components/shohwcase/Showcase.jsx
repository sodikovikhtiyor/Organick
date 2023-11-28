import React from "react";
import Button from "../button/Button";
import "./Showcase.scss";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { NavLink } from "react-router-dom";

function Showcase() {
  return (
    <div className="showcase">
      <div className="showcase-container">
        <div className="half">
          <p className="title">100% Natural Food</p>
          <h1>Choose the best healthier way of life</h1>
          <NavLink to='/about'>
            <Button btnType="btn btnbgyellow" children="Explore Now" />
          </NavLink>
        </div>
        <div className="half"></div>
      </div>
    </div>
  );
}

export default Showcase;
