import React, { Component } from "react";

import "./Recovering.css";
import Arrow from "../../components/Arrow";
import Header from "./components/RecoveryHeader";
import Content from "./components/RecoveryContent";

class Recover extends Component {
  render() {
    return (
      <div>
        <div className="main-div-settings">
          <Arrow />
          <Header />
          <Content />
        </div>
      </div>
    );
  }
}
export default Recover;
