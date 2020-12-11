import React from "react";
import { MdCheckCircle, MdRemoveFromQueue } from "react-icons/md";
import { Card, CardHeader, Col, Row } from "reactstrap";
import { BookingComponent } from "./components";

const RecentBookings = () => {
  return (
    <Card className="p-3 recentBookingsControl">
      <CardHeader align="center">
        <h6>Recent Reservations to (Hotel Name)</h6>
      </CardHeader>
      <hr />

      <Col className="mt-1" align="center">
        <small className="text-success">
          <MdRemoveFromQueue size={20} className="mr-2" color="green" />{" "}
          <b>New Requests</b>
        </small>
      </Col>
      <hr />

      <Row>
        <Col md={6} sm={12} xs={12}>
          <BookingComponent />
        </Col>
        <Col md={6} sm={12} xs={12}>
          <BookingComponent />
        </Col>
      </Row>
      <hr />

      <Col className="mt-1" align="center">
        <small>
          <MdCheckCircle size={20} className="mr-2" color="green" />
          <b>Last 7 Days</b>
        </small>
      </Col>
      <hr />
      <Row>
        <Col md={6} sm={12} xs={12}>
          <BookingComponent />
        </Col>
        <Col md={6} sm={12} xs={12}>
          <BookingComponent />
        </Col>
        <Col md={6} sm={12} xs={12}>
          <BookingComponent />
        </Col>
        <Col md={6} sm={12} xs={12}>
          <BookingComponent />
        </Col>
        <Col md={6} sm={12} xs={12}>
          <BookingComponent />
        </Col>
      </Row>
    </Card>
  );
};
export default RecentBookings;
