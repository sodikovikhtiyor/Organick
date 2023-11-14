import React from "react";
import Product from "../product/Product";
import "./Products.scss";
import Button from "../button/Button";
import Brocly from "../../assets/Brocly.svg";
import { NavLink } from "react-router-dom";

function Products() {
  return (
    <div className="products">
      <div className="products-container">
        <p className="title">Categories</p>
        <h1>Our Products</h1>
        <Product cardimg={Brocly} />
        <Product cardimg={Brocly} />
        <NavLink to="/shop">
          <Button btnType="btn btnbgmain" children="Load More >" />
        </NavLink>
      </div>
    </div>
  );
}

export default Products;
