import React from "react";

import { Row, Col } from "react-bootstrap";
import "../Login.css";

const Logo = () => {
  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }} className="login-logo">
        <div className="logo-s">
          <div className="logo"></div>
        </div>
      </Col>
    </Row>
  );
};
export default Logo;
