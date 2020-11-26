import React, { Component } from "react";
import { Booking, Explore } from "./components";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Booking />
        <Explore />
      </div>
    );
  }
}

export default LandingPage;
