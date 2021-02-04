import React from "react";

import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="navigation">
      <div className="navigation-inner">
        <div className="navigation-item is-current">
          <NavLink
            to="/list"
            exact
            activeClassName="my-active"
            className="navigation-item-wrapper"
          >
            <i className="navigation-icon navigation-icon--mroom"></i>
            <span className="navigation-text">M&nbsp;Rooms</span>
          </NavLink>
        </div>
        <div className="navigation-item">
          <NavLink to="/search" className="navigation-item-wrapper">
            <i className="navigation-icon navigation-icon--search"></i>
            <span className="navigation-text">Search</span>
          </NavLink>
        </div>
        <div className="navigation-item">
          <NavLink to="/profile" className="navigation-item-wrapper">
            <i className="navigation-icon navigation-icon--profile"></i>
            <span className="navigation-text">Profile</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Footer;
