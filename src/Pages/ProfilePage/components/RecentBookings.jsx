import React from "react";
import { MdPinDrop } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  CardImg,
  Row,
  Col,
  CardFooter,
  Button,
} from "reactstrap";
import { Sheraton } from "../../../Assets/HotelImages/HotelView";
import routes from "../../../Config/routes";

const RecentBookings = () => {
  return (
    <Card className="recentBookingContainer">
      <CardHeader>
        <h4>Recent Bookings</h4>
        <small>These are some of the bookings you made through us ... </small>
      </CardHeader>
      <CardBody>
        <Card className="border-0">
          <CardBody>
            <Card className="mb-2 recentBookingCard">
              <Row>
                <Col md={5} sm={12} xs={12}>
                  <CardImg src={Sheraton} />
                </Col>
                <Col md={6} sm={12} xs={12}>
                  <CardHeader>
                    <div>
                      <h8>Skylight International Hotel</h8>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <div>
                      <MdPinDrop /> <small>Bole Addis Ababa Ethiopia</small>
                    </div>
                    <div>
                      from <b>12/22/2020</b>
                    </div>
                    <div>
                      to <b>12/22/2020</b>
                    </div>
                    <div>
                      Room Type: <b>Deluxe Bed, Queen Size</b>
                    </div>
                  </CardBody>
                  <CardFooter align="right">
                    <Link to={{ pathname: routes.singleHotel }}>
                      <Button outline>See the Hotel</Button>
                    </Link>
                  </CardFooter>
                </Col>
              </Row>
            </Card>
            <Card className="mb-2 recentBookingCard">
              <Row>
                <Col md={5} sm={12} xs={12}>
                  <CardImg src={Sheraton} />
                </Col>
                <Col md={6} sm={12} xs={12}>
                  <CardHeader>
                    <div>
                      <h8>Skylight International Hotel</h8>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <div>
                      <MdPinDrop /> <small>Bole Addis Ababa Ethiopia</small>
                    </div>

                    <div>
                      from <b>12/22/2020</b>
                    </div>
                    <div>
                      to <b>12/22/2020</b>
                    </div>
                    <div>
                      Room Type: <b>Deluxe Bed, Queen Size</b>
                    </div>
                  </CardBody>
                  <CardFooter align="right">
                    <Link to={{ pathname: routes.singleHotel }}>
                      <Button outline>See the Hotel</Button>
                    </Link>
                  </CardFooter>
                </Col>
              </Row>
            </Card>
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  );
};
export default RecentBookings;
