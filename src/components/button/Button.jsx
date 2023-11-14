import React from "react";
import "./Button.scss";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

 function Button({btnType, children, icon}) {
  return (
    <>
      <button className={btnType} >
        {children} {icon}
      </button>
    </>
  );
}

export default Button;
