import React from "react";
import CardIcon from "../../assets/specIcon.svg";
import "./Whycard.scss";
function Whycard() {
  const whycards = [
    {
      id: 1,
      icon: CardIcon,
      title: "Return Policy",
      text: "Simply dummy text of the printintypesetting industry.",
    },
    {
      id: 2,
      icon: CardIcon,
      title: "Return Policy",
      text: "Simply dummy text of the printintypesetting industry.",
    },
    {
      id: 3,
      icon: CardIcon,
      title: "Return Policy",
      text: "Simply dummy text of the printintypesetting industry.",
    },
    {
      id: 4,
      icon: CardIcon,
      title: "Return Policy",
      text: "Simply dummy text of the printintypesetting industry.",
    },
  ];
  return (
    <div className="whyCards">
      {whycards.map((whycard) => {
        return (
          <div key={whycard.id} className="whyCard">
            <img src={whycard.icon} alt="img" />
            <h3>{whycard.title}</h3>
            <p>{whycard.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Whycard;
