import React from "react";
import { Filter, Hotels } from "./components";
import { Col, Row } from "reactstrap";
import { Booking } from "../LandingPage/components/index";

const AllHotels = () => {
  return (
    <div className="allHotelsContainer">
      <Row>
        <Col md={12} xs={12} sm={12} className="p-5 allHotelsSearch">
          <Booking />
        </Col>
        <Col md={3} sm={12} xs={12}>
          <Filter />
        </Col>
        <Col md={9} sm={12} xs={12}>
          <Hotels />
          <Col />
        </Col>
      </Row>
    </div>
  );
};
export default AllHotels;
