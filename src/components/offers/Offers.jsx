import React from "react";
import Button from "../button/Button";
import Product from "../product/Product";
import Onion from "../../assets/Onion.webp";
import "./Offers.scss";
import { NavLink } from "react-router-dom";
function Offers() {
  return (
    <div className="offers">
      <div className="offers-container">
        <p className="title">Offer</p>
        <div className="offers-text">
          <h1>We Offer Organic For You</h1>
          <NavLink to="/shop#shop">
            <Button btnType="btn btnbgyellow" children="View All Products" />
          </NavLink>
        </div>
        <Product cardimg={Onion} />
      </div>
    </div>
  );
}

export default Offers;
