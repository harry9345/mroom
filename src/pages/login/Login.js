import React, { Component } from "react";

import "./Login.css";
import LoginForm from "./component/LoginForm";
import Footer from "./component/Footer";
import Language from "./component/Language";
import Logo from "./component/Logo";

class Login extends Component {
  render() {
    return (
      <div className="login-setting">
        <div className="login-s">
          <div className="login-bar login-s-bar">
            <Language />
            <Logo />
            <LoginForm />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
