import "./nomatch.scss";

import Button from "../button/Button";
import { NavLink } from "react-router-dom";
export const NoMatch = () => {
  return (
    <div className="nomatch">
      <div className="nomatch-container">
        <div className="half"></div>
        <div className="half_two">
          <span>404</span>
          <h1>Page Not Found </h1>
          <p>The page you are looking for doesn't exist or has been moved</p>
          <NavLink to="/">
            <Button btnType="btn btnbgmain" children="Go To Home Page" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
