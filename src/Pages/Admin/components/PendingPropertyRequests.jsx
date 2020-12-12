import React from "react";
import {
  MdCheckCircle,
  MdPhone,
  MdCancel,
  MdLocationOn,
  MdVisibility,
  MdPerson,
} from "react-icons/md";
import {
  Card,
  CardBody,
  Row,
  Col,
  CardHeader,
  CardFooter,
  Button,
  CardImg,
} from "reactstrap";
import RatingComponent from "../../../Components/RatingComponent";
import { Skylight2 } from "../../../Assets/HotelImages/HotelView";
import { Link } from "react-router-dom";
import routes from "../../../Config/routes";
const PendingHotelRequests = () => {
  return (
    <Card className="hotelPendingRequestContainer mt-2">
      <CardHeader>Pending Requests Awaiting Approval</CardHeader>
      <CardBody>
        <Row>
          <Col md={6} sm={12} xs={12}>
            <Card className="p-3 mb-3 ml-3 mr-3 hotelPendingRequestCard">
              <CardHeader>Skylight International Hotel</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <div className="info">
                      <b>Rating</b> <RatingComponent />
                    </div>
                    <div className="info">
                      <b>
                        <MdLocationOn />
                      </b>{" "}
                      Location Goes Here
                    </div>
                    <div className="info">
                      <b>
                        <MdPhone color="blue" />
                      </b>{" "}
                      +251921258848
                    </div>
                    <div className="info">
                      <b>
                        <MdPerson />
                      </b>{" "}
                      Yohannes Berhanu
                    </div>
                  </Col>
                  <Col align="center">
                    <CardImg src={Skylight2} />
                  </Col>
                </Row>
              </CardBody>
              <CardFooter className="hotelPendingFooter">
                <Link to={{ pathname: routes.singleHotel }}>
                  <Button outline>
                    <MdVisibility className="mr-2" />
                    See More
                  </Button>
                </Link>

                <Button outline color="success">
                  <MdCheckCircle className="mr-2" />
                  Approve
                </Button>
                <Button outline color="danger">
                  <MdCancel className="mr-2" /> Decline
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <Card className="p-3 mb-3 ml-3 mr-3 hotelPendingRequestCard">
              <CardHeader>Skylight International Hotel</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <div className="info">
                      <b>Rating</b> <RatingComponent />
                    </div>
                    <div className="info">
                      <b>
                        <MdLocationOn />
                      </b>{" "}
                      Location Goes Here
                    </div>
                    <div className="info">
                      <b>
                        <MdPhone color="blue" />
                      </b>{" "}
                      +251921258848
                    </div>
                    <div className="info">
                      <b>
                        <MdPerson />
                      </b>{" "}
                      Yohannes Berhanu
                    </div>
                  </Col>
                  <Col align="center">
                    <CardImg src={Skylight2} />
                  </Col>
                </Row>
              </CardBody>
              <CardFooter className="hotelPendingFooter">
                <Link to={{ pathname: routes.singleHotel }}>
                  <Button outline>
                    <MdVisibility className="mr-2" />
                    See More
                  </Button>
                </Link>

                <Button outline color="success">
                  <MdCheckCircle className="mr-2" />
                  Approve
                </Button>
                <Button outline color="danger">
                  <MdCancel className="mr-2" /> Decline
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <Card className="p-3 mb-3 ml-3 mr-3 hotelPendingRequestCard">
              <CardHeader>Skylight International Hotel</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <div className="info">
                      <b>Rating</b> <RatingComponent />
                    </div>
                    <div className="info">
                      <b>
                        <MdLocationOn />
                      </b>{" "}
                      Location Goes Here
                    </div>
                    <div className="info">
                      <b>
                        <MdPhone color="blue" />
                      </b>{" "}
                      +251921258848
                    </div>
                    <div className="info">
                      <b>
                        <MdPerson />
                      </b>{" "}
                      Yohannes Berhanu
                    </div>
                  </Col>
                  <Col align="center">
                    <CardImg src={Skylight2} />
                  </Col>
                </Row>
              </CardBody>
              <CardFooter className="hotelPendingFooter">
                <Link to={{ pathname: routes.singleHotel }}>
                  <Button outline>
                    <MdVisibility className="mr-2" />
                    See More
                  </Button>
                </Link>

                <Button outline color="success">
                  <MdCheckCircle className="mr-2" />
                  Approve
                </Button>
                <Button outline color="danger">
                  <MdCancel className="mr-2" /> Decline
                </Button>
              </CardFooter>
            </Card>
          </Col>

          <Col md={6} sm={12} xs={12}>
            <Card className="p-3 mb-3 ml-3 mr-3 hotelPendingRequestCard">
              <CardHeader>Skylight International Hotel</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <div className="info">
                      <b>Rating</b> <RatingComponent />
                    </div>
                    <div className="info">
                      <b>
                        <MdLocationOn />
                      </b>{" "}
                      Location Goes Here
                    </div>
                    <div className="info">
                      <b>
                        <MdPhone color="blue" />
                      </b>{" "}
                      +251921258848
                    </div>
                    <div className="info">
                      <b>
                        <MdPerson />
                      </b>{" "}
                      Yohannes Berhanu
                    </div>
                  </Col>
                  <Col align="center">
                    <CardImg src={Skylight2} />
                  </Col>
                </Row>
              </CardBody>
              <CardFooter className="hotelPendingFooter">
                <Link to={{ pathname: routes.singleHotel }}>
                  <Button outline>
                    <MdVisibility className="mr-2" />
                    See More
                  </Button>
                </Link>

                <Button outline color="success">
                  <MdCheckCircle className="mr-2" />
                  Approve
                </Button>
                <Button outline color="danger">
                  <MdCancel className="mr-2" /> Decline
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
export default PendingHotelRequests;
