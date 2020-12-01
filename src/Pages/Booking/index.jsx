import React from "react";
import {
  MdDone,
  MdDoneAll,
  MdLocationOn,
  MdPerson,
  MdStar,
} from "react-icons/md";
import { Link } from "react-router-dom";
import {
  Card,
  Progress,
  Row,
  Col,
  CardImg,
  CardTitle,
  CardBody,
  Button,
  Input,
  FormGroup,
  Label,
} from "reactstrap";
import { Intercontinental } from "../../Assets/HotelImages/HotelView";
import routes from "../../Config/routes";

const Booking = () => {
  return (
    <div className="bookingContainers">
      <div className="progresses">
        <Row>
          <Col md={3} align="center">
            <MdDoneAll color="green" size={30} />
            <div>Choose your Room</div>
          </Col>
          <Col align="center" md={5} className="mt-4">
            <Progress value={100} />
          </Col>
          <Col md={3} align="center">
            <MdDone color="green" size={30} />
            <div>Enter Your Detail</div>
          </Col>
        </Row>
      </div>

      <Card className="p-3 detailInfo">
        <Row>
          <Col md={6}>
            <CardImg src={Intercontinental} />
          </Col>
          <Col md={6} className="p-3">
            <CardTitle>
              <h6>Skylight International Hotel</h6>
            </CardTitle>
            <div className="ratings">
              <MdStar size={30} />
              <MdStar size={30} />
              <MdStar size={30} />
              <MdStar size={30} />
              <MdStar size={30} />
            </div>

            <CardTitle>
              <MdLocationOn /> Bole, Addis Ababa : Ethiopia
            </CardTitle>
          </Col>
        </Row>
        <hr />
        <small>Please Sign in</small>
        <Card className="signIn">
          <Row>
            <Col md={2}>
              <MdPerson size={90} />
            </Col>
            <Col md={9}>
              <CardBody>
                <CardTitle>
                  <b>Save Time! Sign in to book with your saved Details</b>{" "}
                </CardTitle>
                <Link to={{ pathname: routes.signIn }}>
                  <Button outline>Sign In</Button>
                </Link>
              </CardBody>
            </Col>
          </Row>
        </Card>
        <hr />
        <small>Enter Your Details</small>
        <Card className="border-0 p-3">
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>First Name*</Label>
                <Input placeholder="First Name" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Last Name*</Label>
                <Input placeholder="Last Name" />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label>Email Address*</Label>
                <Input type="email" placeholder="Email Address" />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label>Confirm Email Address*</Label>
                <Input type="email" placeholder="Confirm Email Address" />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label>Phone Number*</Label>
                <Input type="number" placeholder="Phone Number" />
              </FormGroup>
            </Col>
            <Col md={12} align="center">
              <Button>Confirm Your Booking</Button>
            </Col>
          </Row>
        </Card>
      </Card>
    </div>
  );
};
export default Booking;
