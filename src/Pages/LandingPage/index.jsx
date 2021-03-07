import React, { Component } from "react";
import { Card } from "reactstrap";
import { AboutUs, Booking, Explore, PopularPlaces } from "./components";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Card>
          <div className="landingPageContainer">
            <Booking />
            <Explore />
            <PopularPlaces />
          </div>
          <AboutUs />
        </Card>
      </>
    );
  }
}

export default LandingPage;
