import React, { Component } from "react";
import "./BarberShop.css";
import Services from "./components/Services";

export class BarberShop1 extends Component {
  render() {
    return (
      <div className="s-barbershop">
        <div className="s-barbershop__wrapper h-scrollable">
          <div className="barbershop__image"></div>
          <div className="s-barbershop__header">
            <div className="s-barbershop__header-notice">
              <h4>Estimated waiting time</h4>
              <p>
                Your waiting time will be more precise after joining the queue.
              </p>
            </div>
            <div className="s-barbershop__timer">
              <div className="c-timer c-timer--regular c-timer--none c-timer--string c-timer--font-regular c-timer--now">
                <div className="c-timer__wrapper">
                  <div className="c-timer__time">Now</div>
                  <div className="c-timer__unit c-timer__unit--small">
                    No queue
                  </div>
                </div>
                <div className="c-timer__glow"></div>
                <div className="c-timer__pulse"></div>
                <div className="c-timer__pulse"></div>
              </div>
            </div>
          </div>
          <div className="s-barbershop__fixed-header is-scrolled">
            <h4 className="s-barbershop__fixed-title">Ulemiste keskus</h4>
            <div className="s-barbershop__fixed-timer">
              <div className="c-timer c-timer--tiny c-timer--none c-timer--string c-timer--font-regular c-timer--now">
                <div className="c-timer__wrapper">
                  <div className="c-timer__time">Now</div>
                </div>
                <div className="c-timer__glow"></div>
                <div className="c-timer__pulse"></div>
                <div className="c-timer__pulse"></div>
              </div>
            </div>
          </div>
          <div className="s-barbershop__content">
            <div className="s-barbershop__details">
              <h1 className="s-barbershop__title">Ulemiste keskus</h1>
              <p className="s-barbershop__address">
                Suur-Sõjamäe 4, (3.korrus)
              </p>
              <p>Open (10:00 - 20:00)</p>
            </div>
            <div className="s-barbershop__notice">
              <div className="c-inline-notice">
                <h4>The barbershop seems to be quiet right now.</h4>
                <p>
                  If you are nearby, you can proceed directly to the barbershop.
                </p>
              </div>
            </div>
            <div className="s-barbershop__favorite">
              <button className="c-favorite-toggle">
                <span
                  style={{
                    opacity: 0,
                    transform: "matrix(1, 0, 0, 1, -37.5, -37.5)",
                  }}
                ></span>
              </button>
            </div>
          </div>
          <Services />
        </div>
        <div className="s-barbershop__back">
          <div className="c-back-button">Back</div>
        </div>
        <div className="s-barbershop__queue">
          <button className="c-btn c-btn--queue">Join queue</button>
        </div>
      </div>
    );
  }
}
export default BarberShop1;
