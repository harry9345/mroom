import React, { Component } from "react";

import "../Registering.css";
import { Form, Row, Col, Button } from "react-bootstrap";

class RegisterForm extends Component {
  state = {
    countryCode: "+372",
    phoneNumber: "",
    fullPhone: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  getCountryCodeHandler = (event) => {
    this.setState({ countryCode: event.target.value });
  };
  getPhoneNumber = (event) => {
    this.setState({ phoneNumber: event.target.value });
  };
  getFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  };
  getLastName = (event) => {
    this.setState({ lastName: event.target.value });
  };
  getEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  getPassword = (event) => {
    this.setState({ password: event.target.value });
  };

  //   handelFullPhone = () => {
  //     this.setState({
  //       fullPhone: this.state.countryCode + +this.state.phoneNumber,
  //     });
  //   };

  render() {
    return (
      <Row className="setting-content">
        <Col className="form-setting">
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

            <Form.Group className="login-form-field">
              <Form.Label className="form-lable">First Name</Form.Label>
              <Form.Control
                className="form-control"
                type="text"
                onChange={this.getFirstName.bind(this)}
              />
            </Form.Group>

            <Form.Group className="login-form-field">
              <Form.Label className="form-lable">Last Name</Form.Label>
              <Form.Control
                className="form-control"
                type="text"
                onChange={this.getLastName.bind(this)}
              />
            </Form.Group>

            <Form.Group className="login-form-field">
              <Form.Label className="form-lable">Email</Form.Label>
              <Form.Control
                className="form-control"
                type="email"
                onChange={this.getEmail.bind(this)}
              />
            </Form.Group>

            <Form.Group className="login-form-field">
              <Form.Label className="form-lable">Password</Form.Label>
              <Form.Control
                className="form-control"
                type="password"
                onChange={this.getPassword.bind(this)}
              />
              <div className="form-instraction">
                Password must be at least 8 characters and include at least one
                uppercase letter, one lowercase letter and one number.
              </div>
            </Form.Group>
            <Form.Group>
              <div className="form-checkbox">
                <input
                  type="checkbox"
                  name="terms_accepted"
                  id="terms_accepted"
                  required=""
                  value="on"
                />
                <label htmlFor="terms_accepted">
                  I agree to the
                  <a href="/">terms of use</a>
                </label>
              </div>
              <div className="form-checkbox">
                <input
                  type="checkbox"
                  name="allow_email"
                  id="allow_email"
                  value="on"
                />
                <label htmlFor="allow_email">
                  M&nbsp;Room can send me email
                </label>
              </div>
            </Form.Group>
            <div className="form-submit">
              <Button className="btn c-btn--small ">Submit</Button>
            </div>
          </Form>
        </Col>
      </Row>
    );
  }
}
export default RegisterForm;
