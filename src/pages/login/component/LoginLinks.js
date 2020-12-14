import React from "react";
import "../Login.css";

const LoginLinks = () => {
  return (
    <div className="login-link">
      <a href="/recovery">
        <span>
          <span>
            <strong>Create</strong> or <strong>recover</strong> a password
          </span>
        </span>
      </a>
      <a href="/register">
        <span>
          <span>
            <strong>Register</strong> as a new customer
          </span>
        </span>
      </a>
    </div>
  );
};
export default LoginLinks;
