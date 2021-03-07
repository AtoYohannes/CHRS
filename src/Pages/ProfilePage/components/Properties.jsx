import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  CardImg,
  Row,
  Col,
  Button,
} from "reactstrap";
import {
  Intercontinental2,
  Skylight,
  Sheraton,
} from "../../../Assets/HotelImages/HotelView";
import routes from "../../../Config/routes";
import { MdAdd } from "react-icons/md";
import RatingComponent from "../../../Components/RatingComponent";

const Properties = () => {
  return (
    <Card className="propertiesContainer">
      <CardHeader className="propertiesHeader">
        <div>Your Properties</div>
        <Link to={{ pathname: routes.addHotels }}>
          <Button outline size="sm">
            <MdAdd /> Add Your Hotel / Property
          </Button>
        </Link>
      </CardHeader>
      <CardBody>
        <Row>
          <Col md={6} sm={12} xs={12}>
            <Link
              style={{ textDecoration: "none" }}
              to={{ pathname: routes.singleHotel }}
            >
              <Card className="shadows zoom mb-3">
                <CardImg src={Intercontinental2} />
                <CardHeader>Intercontinental International Hotel</CardHeader>
                <CardBody>
                  <Col>
                    <Row>
                      <RatingComponent />
                      <small className="text-rating ml-3">
                        (2343234 Ratings)
                      </small>
                    </Row>
                  </Col>
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
              <Card className="shadows zoom mb-3">
                <CardImg src={Skylight} />
                <CardHeader>Intercontinental International Hotel</CardHeader>
                <CardBody>
                  <Col>
                    <Row>
                      <RatingComponent />
                      <small className="text-rating ml-3">
                        (2343234 Ratings)
                      </small>
                    </Row>
                  </Col>
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
              <Card className="shadows zoom mb-3">
                <CardImg src={Sheraton} />
                <CardHeader>Intercontinental International Hotel</CardHeader>
                <CardBody>
                  <Col>
                    <Row>
                      <RatingComponent />
                      <small className="text-rating ml-3">
                        (2343234 Ratings)
                      </small>
                    </Row>
                  </Col>
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
