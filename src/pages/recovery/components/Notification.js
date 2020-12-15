import React from "react";
import { Link } from "react-router-dom";

import "../Recovering.css";

const Notification = () => {
  return (
    <div>
      <h3 className="notification-title">Password recovery successful</h3>
      <p className="notification-description">
        You can now use your chosen password next time you log in.
      </p>
      <p>
        <Link to="/login" className="btn c-btn--small">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Notification;
