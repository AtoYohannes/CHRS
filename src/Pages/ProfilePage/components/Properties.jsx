import React from "react";
import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, CardImg, Row, Col } from "reactstrap";
import {
  Intercontinental2,
  Skylight,
  Sheraton,
} from "../../../Assets/HotelImages/HotelView";
import routes from "../../../Config/routes";

const Properties = () => {
  return (
    <Card className="propertiesContainer">
      <CardHeader>Your Properties</CardHeader>
      <CardBody>
        <Row>
          <Col md={6} sm={12} xs={12}>
            <Link
              style={{ textDecoration: "none" }}
              to={{ pathname: routes.singleHotel }}
            >
              <Card className="zoom mb-3">
                <CardImg src={Intercontinental2} />
                <CardHeader>Intercontinental International Hotel</CardHeader>
                <CardBody>
                  <MdStar color="gold" />
                  <MdStar color="gold" />
                  <MdStar color="gold" />
                  <MdStar color="gold" />
                  <MdStar />
                  <small className="text-rating ml-3">(2343234 Ratings)</small>
                  <div>
                    <small>Registered on dd/mm/yyyy</small>
                  </div>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <Link
              style={{ textDecoration: "none" }}
              to={{ pathname: routes.singleHotel }}
            >
              <Card className="zoom mb-3">
                <CardImg src={Skylight} />
                <CardHeader>Intercontinental International Hotel</CardHeader>
                <CardBody>
                  <MdStar color="gold" />
                  <MdStar color="gold" />
                  <MdStar color="gold" />
                  <MdStar color="gold" />
                  <MdStar />
                  <small className="text-rating ml-3">(2343234 Ratings)</small>
                  <div>
                    <small>Registered on dd/mm/yyyy</small>
                  </div>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <Link
              style={{ textDecoration: "none" }}
              to={{ pathname: routes.singleHotel }}
            >
              <Card className="zoom mb-3">
                <CardImg src={Sheraton} />
                <CardHeader>Intercontinental International Hotel</CardHeader>
                <CardBody>
                  <MdStar color="gold" />
                  <MdStar color="gold" />
                  <MdStar color="gold" />
                  <MdStar color="gold" />
                  <MdStar />
                  <small className="text-rating ml-3">(2343234 Ratings)</small>
                  <div>
                    <small>Registered on dd/mm/yyyy</small>
                  </div>
                </CardBody>
              </Card>
            </Link>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
export default Properties;
