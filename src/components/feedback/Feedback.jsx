import React from "react";
import StarsIcons from "../starsicon/StarsIcons";
import Number from "../number/Number";
import "./Feedback.scss";
import Photo from "../../assets/Photo.svg";
function Feedback() {
  return (
    <div className="feedback">
      <div className="feedback-container">
        <p className="title">Testimonial</p>
        <h1>What Our Customer Saying?</h1>
        <img src={Photo} alt="" />
        <StarsIcons />
        <p>
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been.
        </p>
        <h4>Sara Taylor</h4>
        <span>Consumer</span>
        <hr />
        <Number />

      </div>
    </div>
  );
}

export default Feedback;
