import React from "react";
import { MdDone, MdDoneAll, MdLocationOn, MdPerson } from "react-icons/md";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
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
import RatingComponent from "../../Components/RatingComponent";
import routes from "../../Config/routes";
import { toast } from "react-toastify";

import { getUser } from "../../services/authService";
import { addReservation, getData, getStatus } from "../../store/reservations";

const Booking = (props) => {
  const { hotel, room } = props.location.state;
  const dispatch = useDispatch();
  const data = useSelector(getData);
  const status = useSelector(getStatus);
  console.log("====================================");
  console.log(data);
  console.log("====================================");
  const confirmationNumber = Math.random().toString(36).substring(7);

  const handleConfirm = async () => {
    const formData = {
      hotelId: hotel._id,
      roomId: room._id,
      userId: getUser()._id,
      confirmationNumber,
      ...data,
    };
    dispatch(addReservation(formData));
  };
  if (status === "success") {
    props.history.push({
      pathname: routes.bookingConfirmation,
      state: { confirmationNumber },
    });
  }

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
            <div>Confirm Booking</div>
          </Col>
        </Row>
      </div>

      <Card className="p-3 detailInfo">
        <Row>
          <Col md={6}>
            <CardImg src={hotel.pictures[0]} />
          </Col>
          <Col md={6} className="p-3">
            <CardTitle>
              <h6>{hotel.name}</h6>
            </CardTitle>
            <div className="ratings">
              <RatingComponent size={30} />
            </div>

            <CardTitle>
              <MdLocationOn /> {hotel.city}
            </CardTitle>
          </Col>
        </Row>
        <hr />
        {/* <small>Please Sign in</small>
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
        </Card> */}
        <hr />
        <small>Check Your Details</small>
        <Card className="border-0 p-3">
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>First Name*</Label>
                <Input placeholder={getUser().firstName} />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Last Name*</Label>
                <Input placeholder={getUser().lastName} />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label>Email Address*</Label>
                <Input type="email" placeholder={getUser().email} />
              </FormGroup>
            </Col>
            {/* <Col md={12}>
              <FormGroup>
                <Label>Confirm Email Address*</Label>
                <Input type="email" placeholder="Confirm Email Address" />
              </FormGroup>
            </Col> */}
            <Col md={12}>
              <FormGroup>
                <Label>Phone Number*</Label>
                <Input type="number" placeholder={getUser().phone} />
              </FormGroup>
            </Col>
            <Col md={12} align="center">
              <Button onClick={handleConfirm}>Confirm Your Booking</Button>
            </Col>
          </Row>
        </Card>
      </Card>
    </div>
  );
};

export default withRouter(Booking);
