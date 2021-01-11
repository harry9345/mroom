import React from "react";

import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="navigation">
      <div className="navigation-inner">
        <div className="navigation-item is-current">
          <Link to="/list" className="navigation-item-wrapper">
            <i className="navigation-icon navigation-icon--mroom"></i>
            <span className="navigation-text">M&nbsp;Rooms</span>
          </Link>
        </div>
        <div className="navigation-item">
          <Link to="/search" className="navigation-item-wrapper">
            <i className="navigation-icon navigation-icon--search"></i>
            <span className="navigation-text">Search</span>
          </Link>
        </div>
        <div className="navigation-item">
          <Link to="/profile" className="navigation-item-wrapper">
            <i className="navigation-icon navigation-icon--profile"></i>
            <span className="navigation-text">Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
