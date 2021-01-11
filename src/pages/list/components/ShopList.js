import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../List.css";

class ShopList extends Component {
  render() {
    return (
      <div className="list-item">
        <Link
          to={this.props.link}
          onClick={this.props.click}
          className="listing"
        >
          <div className="listing-queue ">
            <div className="timer timer-small">
              <div className="timer-wrapper">
                <div className="timer-string timer-time">Now</div>
                <div className="timer-unit-small timer-unit"> no queue</div>
                <div className=" timer-now timer-glow"></div>
                <div className="timer-pulse"></div>
                <div className="timer-pulse"></div>
              </div>
            </div>
          </div>
          <div className="listing-main">
            <h3 className="listing-title">{this.props.shop}</h3>
            <p className="listing-subtitle">{this.props.address}</p>
            <p className="listing-opening-hours"> {this.props.operation}</p>
          </div>
        </Link>
      </div>
    );
  }
}
export default ShopList;
