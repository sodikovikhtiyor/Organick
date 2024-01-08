import React from "react";
import "./AboutOffer.scss";
import cardImg from "../../assets/Nuts.webp";
function AboutOffer() {
  const products = [
    {
      id: 1,
      img: cardImg,
      text: "Spicy",
    },
    {
      id: 2,
      img: cardImg,
      text: "Nuts & Feesd",
    },
    {
      id: 3,
      img: cardImg,
      text: "Fruits",
    },
    {
      id: 4,
      img: cardImg,
      text: "Vegetable",
    },
  ];
  return (
    <div className="aboutoffer">
      <div className="aboutoffer-container">
        <p className="title">About Us</p>
        <h1>What We Offer for You</h1>
        <div className="aboutoffer-cards">
            {products.map((product) => {
                return (
                    <div className="aboutoffer-card" key={product.id}>
                        <img src={product.img} alt="img" />
                        <p>{product.text}</p>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  );
}

export default AboutOffer;
