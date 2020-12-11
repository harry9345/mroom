import React, { Component } from "react";

import "./Login.css";
import { Form, Row, Col, Button } from "react-bootstrap";

class Login extends Component {
  render() {
    return (
      <div className="login-setting">
        <div className="login-s">
          <div className="login-bar login-s-bar">
            <div xs={2} md={4} className="login-language">
              <a href="/" className="language-link">
                <span className="language-span">Language</span>English
              </a>
            </div>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="login-logo">
                <div className="logo-s">
                  <div className="logo"></div>
                </div>
              </Col>
            </Row>
            <Row className="login-form">
              <Col>
                <Form method="post" className="form">
                  <Form.Group className="login-form-field">
                    <Form.Label className="form-lable">Phone Number</Form.Label>
                    <div className="country-code">
                      <div className="c-dropdown">
                        <div className="dropdown-placeholder">+372</div>
                        <select className="dropdown-select">
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
                    />
                  </Form.Group>

                  <Form.Group className="login-form-field">
                    <Form.Label className="form-lable">Password</Form.Label>
                    <Form.Control className="form-control" type="password" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
                <div>salam</div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
