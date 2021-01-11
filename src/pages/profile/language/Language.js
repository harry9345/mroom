import React from "react";
import Arrow from "../../../components/Arrow";
import LanguageContent from "./components/LanguageContent";
import LanguagesChoice from "./components/LanguagesChoice";

import "./Language.css";

const Language = () => {
  return (
    <div className="language-setting">
      <Arrow />
      <LanguageContent />
      <LanguagesChoice />
    </div>
  );
};

export default Language;
