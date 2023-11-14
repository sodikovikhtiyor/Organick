import React from "react";
import Button from "../button/Button";
import './Subscribe.scss'
function Subscribe() {
  return (
    <div className="subscribe">
      <div className="subscribe-container">
        <div className="half">

        <h1>Subscribe to our Newsletter</h1>
        </div>
        <div className="half sub-text">
            <input type="email" placeholder="Your Email Address" />
            <Button btnType='btn btnbgmain' children='Subscribe'  />
        </div>

      </div>
    </div>
  );
}

export default Subscribe;
