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
import { MdArrowForward, MdPinDrop } from "react-icons/md";
import { Link } from "react-router-dom";
import routes from "../Config/routes";
import RatingComponent from "./RatingComponent";

const AllHotelsComponent = ({ hotel }) => {
  return (
    <div>
      <Card className="border-0 ">
        <CardBody>
          <Card row className="AllItemsHotelContainer shadows zoom">
            <Row>
              <Col md={4} sm={12} xs={12}>
                <CardImg src={hotel.pictures[0]} />
              </Col>
              <Col md={5} sm={12} xs={12}>
                <CardHeader>
                  <div>
                    <h8>{hotel.name}</h8>
                    <RatingComponent />
                  </div>
                </CardHeader>
                <CardBody>
                  <MdPinDrop /> <small>{hotel.city}</small>
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
                  <Link
                    to={{
                      pathname: `/single-hotel/${hotel._id}`,
                      state: { hotel: hotel },
                    }}
                  >
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
