import React, { Component } from "react";

import "./List.css";
import Footer from "../../components/Footer";
import Map from "./Map/Map";
import ShopList from "./components/ShopList";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: [
        {
          id: "0",
          shopName: " Estonia puiestee, Tallinn",
          address: "Estonia puiestee 5",
          operatingHour: "Open (9:00 - 20:00)",
          link: "/barbershop1",
        },
        {
          id: "1",
          shopName: "Ulemiste keskus, Tallinn",
          address: "Suur-Sõjamäe 4, (3.korrus)",
          operatingHour: "Open (10:00 - 20:00)",
          link: "/barbershop2",
        },
      ],
    };
  }

  barberShopHandler = (index) => {
    const shops = this.state.shops;
    if (index === shops[0].id) {
      this.props.history.push("/barbershop1");
    } else if (index === shops[1].id) {
      this.props.history.push("/barbershop2");
    }
  };

  render() {
    const shops = this.state.shops;
    return (
      <div>
        <Map />
        <Footer />
        <div className="list-wrapper" style={{ transform: `translateY(1px)` }}>
          {shops.map((shop, index) => {
            return (
              <ShopList
                key={shop.id}
                shop={shop.shopName}
                address={shop.address}
                operation={shop.operatingHour}
                click={() => this.barberShopHandler(index)}
                link={shop.link}
              />
            );
          })}
        </div>
        <div className="list-refresh">
          <button className="refresh-button"></button>
        </div>
      </div>
    );
  }
}
export default List;
