import React from "react";
import "./Number.scss";
function Number() {
  const numbers = [
    {
      id: 1,
      number: "100%",
      text: "Organic",
    },
    {
      id: 2,
      number: "285",
      text: "Active Product",
    },
    {
      id: 3,
      number: "25+",
      text: "Years of Farming",
    },
    {
      id: 4,
      number: "350+",
      text: "Organic Orchads",
    },
  ];
  return (
    <div className="circles">
      {numbers.map((number) => {
        return (
          <div className="circle" key={number.id}>
            <h1>{number.number}</h1>
            <p>{number.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Number;
