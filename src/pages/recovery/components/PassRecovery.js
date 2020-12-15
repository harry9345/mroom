import React from "react";

import { Form, Button } from "react-bootstrap";

const PassRecovery = (props) => {
  return (
    <Form method="post" className="form">
      <div className="form-description">
        First, input your phone number and we'll send you a confirmation code
        via SMS.
      </div>
      <Form.Group className="login-form-field">
        <Form.Label className="form-lable">Phone Number</Form.Label>
        <div className="country-code">
          <div className="c-dropdown">
            <div className="dropdown-placeholder">{props.countryCode}</div>
            <select
              className="dropdown-select"
              onChange={props.getCountryCodeHandler}
            >
              <option value="+358">Finland</option>
              <option value="+46">Sweden</option>
              <option value="+45">Denmark</option>
              <option value="+47">Norway</option>
              <option value="+1">United States</option>
              <option value="+372" defaultValue>
                Estonia
              </option>
            </select>
          </div>
        </div>
        <Form.Control
          className="form-control phone-code"
          type="number"
          placeholder="401234567"
          onChange={props.getPhoneNumber}
        />
      </Form.Group>
      <div className="form-submit">
        <Button
          className="btn c-btn--small"
          onClick={props.showFullPhonenumber}
        >
          Send
        </Button>
      </div>
    </Form>
  );
};
export default PassRecovery;
