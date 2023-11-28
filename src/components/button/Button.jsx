import React from "react";
import "./Button.scss";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Button({ btnType, children }) {
  return (
    <>
      <button className={btnType}>
        {children} <ArrowRightAltIcon className="arrowIcon"/>
      </button>
    </>
  );
}

export default Button;
