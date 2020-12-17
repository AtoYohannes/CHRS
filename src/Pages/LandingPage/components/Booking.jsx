import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { Input, Row, Button, Col, Form } from "reactstrap";
import routes from "../../../Config/routes";
import Joi from "joi-browser";

import ParentForm from "../../common/form";
import { addData } from "../../../store/reservations";
import { connect } from "react-redux";
class Explore extends ParentForm {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        location: "",
        checkInDate: "",
        checkOutDate: "",
      },
      errors: {},
    };
    this.schema = {
      location: Joi.string(),
      checkInDate: Joi.date(),
      checkOutDate: Joi.date(),
    };
  }
  doSubmit = () => {
    this.props.addData(this.state.data);

    this.props.history.push(routes.allHotels);
  };
  render() {
    return (
      <div className="bookingContainer">
        <div className="labels">
          <h6>
            <b>Find deals on Hotels, Guest houses, and much more...</b>{" "}
          </h6>
          <small>From country rental places to fancy city Hotels</small>
        </div>
        <hr />
        <Col align="center">
          <Form onSubmit={this.handleSubmit}>
            <Row className="bookingInputContainer">
              <div className="locationInput">
                {this.renderInput2("location", "Where are you going?")}
              </div>
              <div>{this.renderInput2("checkInDate", "", "date")}</div>
              <div>{this.renderInput2("checkOutDate", "", "date")}</div>

              {/* <div>
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
              </div> */}
              <div>{this.renderButton2("Search")}</div>
            </Row>
          </Form>
        </Col>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addData: (data) => dispatch(addData(data)),
});
export default connect(null, mapDispatchToProps)(withRouter(Explore));
