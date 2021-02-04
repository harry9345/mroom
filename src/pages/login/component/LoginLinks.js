import React from "react";
import { NavLink } from "react-router-dom";
import "../Login.css";

const LoginLinks = () => {
  return (
    <div className="login-link">
      <NavLink to="/recovery">
        <span>
          <span>
            <strong>Create</strong> or <strong>recover</strong> a password
          </span>
        </span>
      </NavLink>
      <NavLink to="/register">
        <span>
          <span>
            <strong>Register</strong> as a new customer
          </span>
        </span>
      </NavLink>
    </div>
  );
};
export default LoginLinks;
