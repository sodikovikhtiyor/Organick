import React from "react";
import Button from "../button/Button";
import Product from "../product/Product";
import Onion from "../../assets/Onion.svg";
import "./Offers.scss";
function Offers() {
  return (
    <div className="offers">
      <div className="offers-container">
        <p className="title">Offer</p>
        <div className="offers-text">
          <h1>We Offer Organic For You</h1>
          <Button btnType="btn btnbgyellow" children="View All Products" />
        </div>
        <Product cardimg={Onion} />
      </div>
    </div>
  );
}

export default Offers;
