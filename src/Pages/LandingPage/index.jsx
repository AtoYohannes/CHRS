import React, { Component } from "react";
import { Booking, Explore } from "./components";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="landingPageContainer">
        <Booking />
        <Explore />
      </div>
    );
  }
}

export default LandingPage;
