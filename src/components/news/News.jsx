import React from "react";
import "./News.scss";
import Button from "../button/Button";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";
function News() {
  return (
    <div className="news">
      <div className="news-container">
        <p className="title">News</p>
        <div className="news-text">
          <h1>Discover weekly content about organic food, & more</h1>
          <NavLink to="/news">
            <Button btnType="btn outlined" children="More News" />
          </NavLink>
        </div>
        <div className="newscards">
          <div className="half newsCardOne">
            <div className="round">
              25 <br /> Nov
            </div>
            <div className="newsCard">
              <PersonIcon className="personIcon" />
              <span>By Richard Card</span>
              <h5>The Benefits of Vitamin D & How to Get It</h5>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
              <NavLink to="/news">
                <Button btnType="btn btnbgyellow" children="Read More" />
              </NavLink>
            </div>
          </div>
          <div className="half newsCardTwo">
            <div className="round">
              25 <br /> Nov
            </div>
            <div className="newsCard">
              <PersonIcon className="personIcon" />
              <span>By Richard Card</span>
              <h5>The Benefits of Vitamin D & How to Get It</h5>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
              <NavLink to="/shop">
                <Button btnType="btn btnbgyellow" children="Read More" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
