import React, { Component } from "react";

import PassRecovery from "./PassRecovery";
import SetNewPass from "./SetNewPassword";
import Notification from "./Notification";

import "../Recovering.css";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCode: "+372",
      phoneNumber: "",
      fullPhone: "",
      firstComponent: true,
      secondComponent: false,
      thirdComponent: false,
    };
    this.getCountryCodeHandler = this.getCountryCodeHandler.bind(this);
    this.getPhoneNumber = this.getPhoneNumber.bind(this);
    this.showFullPhonenumber = this.showFullPhonenumber.bind(this);
    this.showThirdComponent = this.showThirdComponent.bind(this);
  }
  getCountryCodeHandler = (event) => {
    this.setState({ countryCode: event.target.value });
  };
  getPhoneNumber = (event) => {
    this.setState({ phoneNumber: event.target.value });
  };
  showFullPhonenumber = () => {
    this.setState({
      fullPhone: this.state.countryCode + +this.state.phoneNumber,
      firstComponent: false,
      secondComponent: true,
    });
  };
  showThirdComponent = () => {
    this.setState({ secondComponent: false, thirdComponent: true });
  };

  render() {
    return (
      <div className="content-setting">
        <div className="content-form">
          {this.state.firstComponent ? (
            <PassRecovery
              countryCode={this.state.countryCode}
              phoneNumber={this.state.phoneNumber}
              getCountryCodeHandler={this.getCountryCodeHandler}
              getPhoneNumber={this.getPhoneNumber}
              showFullPhonenumber={this.showFullPhonenumber}
            />
          ) : this.state.secondComponent ? (
            <SetNewPass showThirdComponent={this.showThirdComponent}>
              {this.state.fullPhone}
            </SetNewPass>
          ) : (
            <Notification />
          )}
        </div>
      </div>
    );
  }
}

export default Content;

/* {this.state.secondComponent ? (
            <SetNewPass showThirdComponent={this.showThirdComponent}>
              {this.state.fullPhone}
            </SetNewPass>
          ) : (
            <Notification />
          )} */

//   {this.state.firstComponent ? (
//     <PassRecovery
//       countryCode={this.state.countryCode}
//       phoneNumber={this.state.phoneNumber}
//       getCountryCodeHandler={this.getCountryCodeHandler}
//       getPhoneNumber={this.getPhoneNumber}
//       showFullPhonenumber={this.showFullPhonenumber}
//     />
//   ) : (
//     <SetNewPass showThirdComponent={this.showThirdComponent}>
//       {this.state.fullPhone}
//     </SetNewPass>
//   )}
/* <PassRecovery
countryCode={this.state.countryCode}
phoneNumber={this.state.phoneNumber}
getCountryCodeHandler={this.getCountryCodeHandler}
getPhoneNumber={this.getPhoneNumber}
showFullPhonenumber={this.showFullPhonenumber}
/>
<SetNewPass showThirdComponent={this.showThirdComponent}>
{this.state.fullPhone}
</SetNewPass>
<Notification /> */
