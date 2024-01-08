import React from "react";
import "./SingleCard.scss";
import StarsIcons from "../starsicon/StarsIcons";

import pista from "../../assets/Pistachios.png";
import Button from "../button/Button";
export default function SingleCard({ img, title }) {
  return (
    <div className="singleCard">
      <div className="singleCard-container">
        <div className="half">
          <img src={pista} />
        </div>
        <div className="half">
          <h1>{title}</h1>
          <StarsIcons />
          <span>$20.00</span>
          <h6>$13.00</h6>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className="half-bottom">
            <label>
                <h5>Quantity:</h5>
                <input type="number" onChange={e => console.log('Done')} />
            </label>
            <Button btnType="btn btnbgmain" children="Add To Cart" icon=">" />
          </div>
        </div>
      </div>
    </div>
  );
}
