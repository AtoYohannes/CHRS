import React from "react";
import { Card, CardHeader, CardImg, Row, Col, CardBody } from "reactstrap";
import { Skylight } from "../../Assets/HotelImages/HotelView";
import RatingComponent from "../../Components/RatingComponent";
import { RatingsCard } from "./components";
const RatingsAndReviews = () => {
  return (
    <Card className="ratingAndReviewsContainer">
      <CardHeader>
        <Row>
          <Col md={6} xs={12} sm={12}>
            <h5>Skylight International Hotel</h5>
          </Col>
          <Col md={6} xs={12} sm={12} align="right">
            <RatingComponent size={40} rating={1} />
          </Col>
        </Row>
      </CardHeader>
      <CardImg src={Skylight} />
      <CardBody>
        <CardHeader className="allRatings">
          <div>All Ratings for (Hotel Name)</div>
          <div>
            <small className="text-lowercase">
              87346287346827346 __ Ratings
            </small>
          </div>
        </CardHeader>
        <CardBody>
          <div>
            <Col align="center">
              <small>Last 7 Days</small>
            </Col>
            <hr />
            <Row>
              <Col md={4} sm={12} xs={12}>
                <RatingsCard />
              </Col>
              <Col md={4} sm={12} xs={12}>
                <RatingsCard />
              </Col>
              <Col md={4} sm={12} xs={12}>
                <RatingsCard />
              </Col>
              <Col md={4} sm={12} xs={12}>
                <RatingsCard />
              </Col>
              <Col md={4} sm={12} xs={12}>
                <RatingsCard />
              </Col>
              <Col md={4} sm={12} xs={12}>
                <RatingsCard />
              </Col>
            </Row>
          </div>
          <div className="mt-4">
            <Col align="center">
              <small>Last 30 Days</small>
            </Col>
            <hr />
            <Row>
              <Col md={4} sm={12} xs={12}>
                <RatingsCard />
              </Col>
              <Col md={4} sm={12} xs={12}>
                <RatingsCard />
              </Col>
              <Col md={4} sm={12} xs={12}>
                <RatingsCard />
              </Col>
              <Col md={4} sm={12} xs={12}>
                <RatingsCard />
              </Col>
              <Col md={4} sm={12} xs={12}>
                <RatingsCard />
              </Col>
            </Row>
          </div>
        </CardBody>
      </CardBody>
    </Card>
  );
};
export default RatingsAndReviews;
