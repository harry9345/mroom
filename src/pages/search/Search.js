import React, { Component } from "react";

import "./Search.css";
import Footer from "../../components/Footer";
import { NavLink } from "react-router-dom";

class Search extends Component {
  render() {
    return (
      <div>
        <div>search</div>
        <Footer />
        <NavLink to="/barbershop1">
          <button>barbershop1</button>
        </NavLink>
        <NavLink to="/barbershop2">
          <button>barbershop2</button>
        </NavLink>
      </div>
    );
  }
}
export default Search;
