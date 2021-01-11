import React from "react";

import "../Language.css";

const LanguageContent = () => {
  return (
    <div className="header">
      <h1 className="title">Change language</h1>
      <p className="subtitle">
        Choose the language used in the application. Does not affect i.e. the
        service descriptions which are currently only available in the default
        language.
      </p>
    </div>
  );
};

export default LanguageContent;
