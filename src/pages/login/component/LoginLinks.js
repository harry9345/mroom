import React from "react";
import { Link } from "react-router-dom";
import "../Login.css";

const LoginLinks = () => {
  return (
    <div className="login-link">
      <Link to="/recovery">
        <span>
          <span>
            <strong>Create</strong> or <strong>recover</strong> a password
          </span>
        </span>
      </Link>
      <Link to="/register">
        <span>
          <span>
            <strong>Register</strong> as a new customer
          </span>
        </span>
      </Link>
    </div>
  );
};
export default LoginLinks;
