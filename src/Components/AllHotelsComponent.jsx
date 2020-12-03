import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardImg,
  Col,
  Row,
  CardTitle,
  Button,
} from "reactstrap";
import { Intercontinental } from "../Assets/HotelImages/HotelView";
import { MdArrowForward, MdPinDrop, MdStar } from "react-icons/md";
import { Link } from "react-router-dom";
import routes from "../Config/routes";

const AllHotelsComponent = () => {
  return (
    <div>
      <Card className="border-0 bg-background">
        <CardBody>
          <Card row className="AllItemsHotelContainer">
            <Row>
              <Col md={3} sm={12} xs={12}>
                <CardImg src={Intercontinental} />
              </Col>
              <Col md={6} sm={12} xs={12}>
                <CardHeader>
                  <div>
                    <h8>Skylight International Hotel</h8>
                    <MdStar color="gold" />
                    <MdStar color="gold" />
                    <MdStar color="gold" />
                    <MdStar color="gold" />
                    <MdStar color="gold" />
                  </div>
                </CardHeader>
                <CardBody>
                  <MdPinDrop /> <small>Bole Addis Ababa Ethiopia</small>
                </CardBody>
              </Col>
              <Col align="right" className="pr-5" md={3} sm={12} xs={12}>
                <CardTitle>
                  <Card className="ratingRate bg-secondary text-light">
                    <h4>
                      <b>8.3</b>
                    </h4>
                  </Card>
                </CardTitle>
                <CardTitle className="text-primary mr-1">
                  <b>Very Good</b>
                </CardTitle>
                <CardTitle className=" mr-1 reviews">
                  <b>64 Reviews</b>
                </CardTitle>

                <CardTitle>
                  <Link to={{ pathname: routes.singleHotel }}>
                    <Button>
                      Choose Room <MdArrowForward />
                    </Button>
                  </Link>
                </CardTitle>
              </Col>
            </Row>
          </Card>
        </CardBody>
      </Card>
    </div>
  );
};
export default AllHotelsComponent;
