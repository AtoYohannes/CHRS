import React from "react";
import { Card, CardImg, Col, Row } from "reactstrap";
import CardHeader from "reactstrap/lib/CardHeader";
import {
  Intercontinental,
  Skylight,
  Sheraton,
  Eleli,
} from "../../../Assets/HotelImages/HotelView";
import RatingComponent from "../../../Components/RatingComponent";

const PopularPlaces = () => {
  return (
    <div className="popularPlacesContainer">
      <h6>
        <b>Popular Places</b>
      </h6>
      <h8>Below are listed the most visited Hotels</h8>
      <Card className="p-3 bg-0 cards">
        <Row>
          <Col md={3} sm={12} xs={12}>
            <Card className="shadows zoom">
              <CardImg src={Intercontinental} />
              <CardHeader className="border-0">
                Hotel Name
                <RatingComponent />
              </CardHeader>
            </Card>
          </Col>
          <Col md={3} sm={12} xs={12}>
            <Card className="shadows zoom">
              <CardImg src={Skylight} />
              <CardHeader className="border-0">
                Hotel Name
                <RatingComponent />
              </CardHeader>
            </Card>
          </Col>
          <Col md={3} sm={12} xs={12}>
            <Card className="shadows zoom">
              <CardImg src={Sheraton} />
              <CardHeader className="border-0">
                Hotel Name
                <RatingComponent />
              </CardHeader>
            </Card>
          </Col>
          <Col md={3} sm={12} xs={12}>
            <Card className="shadows zoom">
              <CardImg src={Eleli} />
              <CardHeader className="border-0">
                Hotel Name
                <RatingComponent />
              </CardHeader>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
export default PopularPlaces;
