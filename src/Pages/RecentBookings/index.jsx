import React from "react";
import { MdCheckCircle, MdPerson, MdRemoveFromQueue } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button, Card, CardHeader, Col, Row } from "reactstrap";
import routes from "../../Config/routes";
import { BookingComponent } from "./components";

const RecentBookings = () => {
  return (
    <Card className="p-3 mt-2 recentBookingsContainer">
      <CardHeader className="recentBookingsContainerHeader">
        <h6>Recent Reservations to (Hotel Name)</h6>
        <Link to={{ pathname: routes.customers }}>
          <Button outline>
            <MdPerson className="mr-2" />
            See your Customers
          </Button>
        </Link>
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
