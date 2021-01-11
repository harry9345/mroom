import React from "react";

import { Link } from "react-router-dom";

import "../Login.css";

const Language = () => {
  return (
    <div xs={2} md={4} className="login-language">
      <Link to="/language" className="language-link">
        <span className="language-span">Language</span>English
      </Link>
    </div>
  );
};
export default Language;
