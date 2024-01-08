import React from "react";
import "./Single.scss";
import Showcase from "../about-showcase/Showcase";
import ssHbaner from "../../assets/ssh-baner.png";
import SingleCard from "../single-card/SingleCard";
import Product from "../product/Product";
import Brocly from "../../assets/Brocly.webp";
import Subscribe from "../subscribe/Subscribe";
import Button from "../button/Button";
export default function Single() {
  return (
    <div className="singleProduct">
        <Showcase text="Single shop" backgroundImage={ssHbaner} />
        <SingleCard title="Health Pistachios" />
        <div className="info"> 
          <Button btnType='btn btnbgmain' children='Product Description' onClick/>
        </div>
      <div className="singleProduct-container">
        <h1>Related Products</h1>
        <Product cardimg={Brocly} />
        <Subscribe/>
      </div>
    </div>
  );
}
