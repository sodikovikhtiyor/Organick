import React from "react";
import Showcase from "../about-showcase/Showcase";
import portfolio from "../../assets/service.png";
import lemon from "../../assets/Lemon.png";
import "./Portfolio.scss";
function Portfolio() {
  const products = [
    {
      name: "Green & Tasty Lemon",
      category: "Fruits",
      img: lemon,
    },
    {
      name: "Organic Carrot",
      category: "Farmer",
      img: lemon,
    },
    {
      name: "Organic Betel Leaf",
      category: "Leaf",
      img: lemon,
    },
    {
      name: "Natural Tommato",
      category: "Fruits",
      img: lemon,
    },
    {
      name: "Black Raspberry",
      category: "Farmer",
      img: lemon,
    },
    {
      name: "Green & Tasty Lemon",
      category: "Fruits",
      img: lemon,
    },
  ];
  return (
    <div>
      <Showcase text="Portfolio Standard" backgroundImage={portfolio} height='350px'/>
      <div className="portfolio-container">
        <div className="portfolio-products">
          {products.map((product, index) => {
            return (
              <div className="product" key={index}>
                <img src={product.img} />
                <h5>{product.name}</h5>
                <p>{product.category}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
