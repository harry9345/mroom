import React from "react";
import "../Registering.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="register-header">
      <h1 className="header_title">Register</h1>
      <p className="header-subtitle">
        Get credentials immediately by filling the form below.
      </p>
      <div className="notice">
        <div className="inline-notice">
          <h4>Note! Are you already an M&nbsp;Room customer?</h4>
          <p>
            Create or recover a password to My&nbsp;M&nbsp;Room instead of
            registering as a new customer.
          </p>
          <div className="notice-link">
            <NavLink to="/recovery" className="link">
              Create or recover password
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
