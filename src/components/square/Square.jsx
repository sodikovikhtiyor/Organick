import React from "react";
import "./Square.scss";
import Orange from "../../assets/orange.svg";
function Square() {
  const squares = [
    {
      id: 1,
      img: Orange,
      text: "Organic Juice",
    },
    {
      id: 2,
      img: Orange,
      text: "Organic Juice",
    },
    {
      id: 3,
      img: Orange,
      text: "Organic Juice",
    },
  ];
  //   const squaresBg = () => {
  //     return {
  //       background: {squares.map((square) => {
  //         return (
  //           background: `url(${square.img}) center / cover no-repeate`;
  //         );
  //       })},
  //     };
  //   };
  return (
    <div className="squares">
      {squares.map((square) => {
        return (
          <div className="square" key={square.id}>
            <h4
              style={{
                background:
                  "url(../../assets/orange.svg) center / cover no-repeate",
              }}
            >
              {square.text}
            </h4>
          </div>
        );
      })}
    </div>
  );
}

export default Square;
