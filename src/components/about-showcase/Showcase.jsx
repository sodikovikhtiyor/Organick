import React from "react";
import "./Showcase.scss";
function Showcase({ text, backgroundImage, height }) {
  return (
    <div
      className="mainShowcase"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: `${height}`,
      }}
    >
      <h1>{text}</h1>
    </div>
  );
}

export default Showcase;
