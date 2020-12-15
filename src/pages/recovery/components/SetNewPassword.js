import React from "react";

import { Form, Button } from "react-bootstrap";
import "../Recovering.css";

const SetNewPass = (props) => {
  return (
    <Form>
      <div className="recover-phone">
        <div>{props.children}</div>
      </div>
      <div className="recovery-description">
        Next, input the confirmation code you received via SMS and your desired
        new password. The password must be at least 8 characters and include at
        least one uppercase letter, one lowercase letter and one number.
      </div>
      <Form.Group controlId="formBasicCode" className="code-field">
        <Form.Label className="form-lable">Confirm Code</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword" className="code-field">
        <Form.Label className="form-lable">Choose New Password</Form.Label>
        <Form.Control type="Password" className="form-input" />
        <Form.Text className="recovery-instructions">
          Password must be at least 8 characters and include at least one
          uppercase letter, one lowercase letter and one number.
        </Form.Text>
      </Form.Group>

      <div className="recovery-submit">
        <Button
          className="btn btn-primary c-btn--small "
          onClick={props.showThirdComponent}
        >
          Send
        </Button>
      </div>
    </Form>
  );
};
export default SetNewPass;
