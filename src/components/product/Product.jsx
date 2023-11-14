import React from "react";
import Brocly from "../../assets/Brocly.svg";
import "./Product.scss";
import StarsIcons from "../starsicon/StarsIcons";
function Product({cardimg}) {
  const cards = [
    {
      id: 1,
      category: "Vegetable",
      img: cardimg,
      name: "Calabrese Broccoli",
      oldPrice: "$20.00",
      price: "$13.00",
    },
    {
      id: 2,
      category: "Vegetable",
      img: cardimg,
      name: "Calabrese Broccoli",
      oldPrice: "$20.00",
      price: "$13.00",
    },
    {
      id: 3,
      category: "Vegetable",
      img: cardimg,
      name: "Calabrese Broccoli",
      oldPrice: "$20.00",
      price: "$13.00",
    },
    {
      id: 4,
      category: "Vegetable",
      img: cardimg,
      name: "Calabrese Broccoli",
      oldPrice: "$20.00",
      price: "$13.00",
    },
    // {
    //   id: 5,
    //   category: "Vegetable",
    //   img: Brocly,
    //   name: "Calabrese Broccoli",
    //   oldPrice: "$20.00",
    //   price: "$13.00",
    // },
    // {
    //   id: 6,
    //   category: "Vegetable",
    //   img: Brocly,
    //   name: "Calabrese Broccoli",
    //   oldPrice: "$20.00",
    //   price: "$13.00",
    // },
    // {
    //   id: 7,
    //   category: "Vegetable",
    //   img: Brocly,
    //   name: "Calabrese Broccoli",
    //   oldPrice: "$20.00",
    //   price: "$13.00",
    // },
    // {
    //   id: 8,
    //   category: "Vegetable",
    //   img: Brocly,
    //   name: "Calabrese Broccoli",
    //   oldPrice: "$20.00",
    //   price: "$13.00",
    // },
  ];

  return (
    <div className="mainProduct">
      {cards.map((card) => {
        return (
          <div className="product" key={card.id}>
            <div className="product-top">
              <div className="categoryTitle">{card.category}</div>
              <img src={card.img} alt="card" />
            </div>
            <div className="product-bottom">
              <h5>{card.name}</h5>
              <hr />
              <span>{card.oldPrice}</span>
              <h5>{card.price}</h5>
              <div className="starsicon">
                <StarsIcons />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
