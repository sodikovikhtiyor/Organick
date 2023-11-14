import React from "react";
import "./Believe.scss";
import Button from "../button/Button";
import Vegan from "../../assets/Vegan.svg";
import Postal from "../../assets/postal.svg";
import { NavLink } from "react-router-dom";
function Believe({ img, title }) {
  return (
    <div className="believe">
      <div className="believe-container">
        <div className="half">
          <img src={img} alt="" />
        </div>
        <div className="half">
          <p className="title">About Us</p>
          <h1>{title}</h1>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className="believeLists">
            <div className="believeList">
              <img src={Vegan} alt="image" />
              <div className="believeListText">
                <h4>Organic food</h4>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="believeList">
              <img src={Postal} alt="image" />
              <div className="believeListText">
                <h4>Quality Standards</h4>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
          <NavLink to="/shop">
            <Button btnType="btn btnbgmain" children="Shop Now" icon=">" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Believe;
