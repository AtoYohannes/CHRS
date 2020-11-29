import React, { Component } from "react";
import { Input, Row, Button, Col } from "reactstrap";

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="bookingContainer">
        <div className="labels">
          <h6>
            <b>Find deals on hotels, homes, and much more...</b>{" "}
          </h6>
          <small>From cozy country homes to funky city apartments</small>
        </div>
        <hr />
        <Col align="center">
          <Row className="bookingInputContainer">
            <div className="locationInput">
              <Input placeholder="Where are you going?" />
            </div>
            <div>
              <Input type="date" />
            </div>
            <div>
              <Input type="date" />
            </div>

            <div>
              <Input type="select">
                <option>Room Type 0</option>
                <option>Room Type 1</option>
                <option>Room Type 2</option>
                <option>Room Type 3</option>
                <option>Room Type 4</option>
                <option>Room Type 5</option>
                <option>Room Type 6</option>
                <option>Room Type 7</option>
                <option>Room Type 8</option>
              </Input>
            </div>
            <div>
              <Button color="primary">Search</Button>
            </div>
          </Row>
        </Col>
      </div>
    );
  }
}

export default Explore;
