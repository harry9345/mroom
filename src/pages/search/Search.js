import React, { Component } from "react";

import "./Search.css";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

class Search extends Component {
  render() {
    return (
      <div>
        <div>search</div>
        <Footer />
        <Link to="/barbershop1">
          <button>barbershop1</button>
        </Link>
        <Link to="/barbershop2">
          <button>barbershop2</button>
        </Link>
      </div>
    );
  }
}
export default Search;
