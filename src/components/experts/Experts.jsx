import React from "react";
import "./Experts.scss";
import expertImg from "../../assets/Girl.webp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
function Experts() {
  const experts = [
    {
      id: 1,
      img: expertImg,
      name: "Giovani Bacardo",
      position: "Farmer",
    },
    {
      id: 2,
      img: expertImg,
      name: "Giovani Bacardo",
      position: "Farmer",
    },
    {
      id: 3,
      img: expertImg,
      name: "Giovani Bacardo",
      position: "Farmer",
    },
  ];
  return (
    <div className="experts">
      <div className="experts-container">
        <p className="title">Team</p>
        <h1>Our Organic Experts</h1>
        <p>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <div className="expertsCards">
          {experts.map((expert) => {
            return (
              <div className="expert" key={expert.id}>
                <img src={expert.img} alt="img" />
                <h5>{expert.name}</h5>
                <p>
                  {expert.position}
                  <span className="icons">
                    <InstagramIcon className="link instaLink" />
                    <FacebookIcon className="link" />
                    <TwitterIcon className="link" />
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experts;
