import React from "react";
import "../pages/registery/Registering.css";
import { Link } from "react-router-dom";

const Arrow = () => {
  return (
    <div className="back-arrow-div">
      <div className="back-arrow">
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};
export default Arrow;
