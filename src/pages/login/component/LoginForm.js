import React, { Component } from "react";

import LoginLinks from "./LoginLinks";
import { Form, Row, Col, Button } from "react-bootstrap";

class LoginForm extends Component {
  state = {
    countryCode: "+372",
    phoneNumber: "",
    fullPhone: "",
  };

  getCountryCodeHandler = (event) => {
    this.setState({ countryCode: event.target.value });
  };
  getPhoneNumber = (event) => {
    this.setState({ phoneNumber: event.target.value });
  };
  render() {
    return (
      <Row className="login-form">
        <Col>
          <Form method="post" className="form">
            <Form.Group className="login-form-field">
              <Form.Label className="form-lable">Phone Number</Form.Label>
              <div className="country-code">
                <div className="c-dropdown">
                  <div className="dropdown-placeholder">
                    {this.state.countryCode}
                  </div>
                  <select
                    className="dropdown-select"
                    onChange={this.getCountryCodeHandler.bind(this)}
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
                onChange={this.getPhoneNumber.bind(this)}
              />
            </Form.Group>
            {/* <div onChange={this.handelFullPhone}>{this.state.fullPhone}</div> */}

            <Form.Group className="login-form-field">
              <Form.Label className="form-lable">Password</Form.Label>
              <Form.Control className="form-control" type="password" />
            </Form.Group>
            <div className="login-button">
              <Button className="btn c-btn--small " type="submit">
                Login
              </Button>
            </div>
            <LoginLinks />
          </Form>
        </Col>
      </Row>
    );
  }
}
export default LoginForm;
