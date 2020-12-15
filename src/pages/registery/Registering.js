import React, { Component } from "react";

import "./Registering.css";
import Arrow from "../../components/Arrow";
import Header from "./components/RegisterHeader";
import RegisterForm from "./components/RegisterForm";

class Register extends Component {
  render() {
    return (
      <div className="registery-main-container">
        <Arrow />
        <Header />
        <RegisterForm />
      </div>
    );
  }
}
export default Register;
