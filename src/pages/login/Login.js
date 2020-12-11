import React, { Component } from "react";

import "./Login.css";
import { Row, Col } from "react-bootstrap";

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
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
