import React from "react";
import "../Language.css";

const languagesChoice = () => {
  return (
    <div className="setting-content">
      <div className="setting-options">
        <li className="option">
          <div className="option-wrapper">
            <h3 className="option-title">Suomi</h3>
            <p className="option-description"></p>
            <p className="option-unit"></p>

            <input
              type="radio"
              id="other"
              name="language"
              className="option-icon"
            />
          </div>
        </li>
        <li className="option is-selected">
          <div className="option-wrapper">
            <h3 className="option-title">English</h3>
            <p className="option-description"></p>
            <p className="option-unit"></p>

            <input
              type="radio"
              id="other"
              name="language"
              className="option-icon"
            />
          </div>
        </li>
        <li className="option">
          <div className="option-wrapper">
            <h3 className="option-title">Norsk</h3>
            <p className="option-description"></p>
            <p className="option-unit"></p>

            <input
              type="radio"
              id="other"
              name="language"
              className="option-icon"
            />
          </div>
        </li>
        <li className="option">
          <div className="option-wrapper">
            <h3 className="option-title">Svenska</h3>
            <p className="option-description"></p>
            <p className="option-unit"></p>

            <input
              type="radio"
              id="other"
              name="language"
              className="option-icon"
            />
          </div>
        </li>
        <li className="option">
          <div className="option-wrapper">
            <h3 className="option-title">Dansk</h3>
            <p className="option-description"></p>
            <p className="option-unit"></p>
            {/* <i className="option-icon"> */}
            <input
              type="radio"
              id="other"
              name="language"
              className="option-icon"
            />
            {/* </i> */}
          </div>
        </li>
        <li className="option">
          <div className="option-wrapper">
            <h3 className="option-title">Deutsch</h3>
            <p className="option-description"></p>
            <p className="option-unit"></p>

            <input
              type="radio"
              id="other"
              name="language"
              className="option-icon"
            />
          </div>
        </li>
      </div>
    </div>
  );
};

export default languagesChoice;
