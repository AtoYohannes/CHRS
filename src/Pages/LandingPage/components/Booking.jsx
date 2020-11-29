import React, { Component } from "react";
import { Col, Input } from "reactstrap";

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="bookingContainer">
        <h6>
          <b>Find deals on hotels, homes, and much more...</b>{" "}
        </h6>
        <small>From cozy country homes to funky city apartments</small>
        <row>
          <Col md={6}>
            <Input placeholder="Where are you going?" />
          </Col>
          <Col md={6}>
            <Input type="date" placeholder="Something" />
          </Col>
          <Col>
            <Input type="date" placeholder="Something" />
          </Col>
          <Col>
            <Input placeholder="Something" />
          </Col>
        </row>
      </div>
    );
  }
}

export default Explore;
