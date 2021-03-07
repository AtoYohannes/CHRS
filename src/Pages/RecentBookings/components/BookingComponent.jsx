import React from "react";
import { MdCancel, MdCheckCircle, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Row,
  Col,
  CardHeader,
  CardFooter,
  Button,
} from "reactstrap";
import Avatar from "../../../Components/Avatar";
import routes from "../../../Config/routes";

const BookingComponent = () => {
  return (
    <Card className="p-3 mb-3 ml-3 mr-3 bookingCard">
      <CardHeader>
        <b>Room Name</b> : (Room Name Goes Here)
      </CardHeader>
      <CardBody>
        <Row>
          <Col>
            <div className="info">
              <b>Stay Duration</b> : ( Ex: 7 Days)
            </div>
            <div className="info">
              <b>From</b> : dd/mm/yyyy
            </div>
            <div className="info">
              <b>To</b> : dd/mm/yyyy
            </div>
            <div className="info">
              <b>Rated</b> : Yes/No
            </div>
          </Col>
          <Col align="center">
            <Link
              to={{ pathname: routes.profile }}
              style={{ textDecoration: "none" }}
            >
              <Avatar size={50} className="mb-2" />
              <h6>Yohannes Berhanu</h6>
              <h7>
                {" "}
                <MdPhone color="blue" /> : +251921258848
              </h7>
            </Link>
          </Col>
        </Row>
      </CardBody>
      <CardFooter className="recentBookingFooter">
        <Button outline color="success">
          <MdCheckCircle className="mr-2" />
          Approve
        </Button>
        <Button outline color="danger">
          <MdCancel className="mr-2" /> Decline
        </Button>
      </CardFooter>
    </Card>
  );
};
export default BookingComponent;
