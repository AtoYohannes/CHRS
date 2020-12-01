import React from "react";
import { MdArrowBack, MdDoneAll, MdPrint, MdStar } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Row,
} from "reactstrap";
import routes from "../../Config/routes";

const BookingConfirmation = () => {
  return (
    <div className="bookingConfirmation">
      <Card className="p-5">
        <CardHeader>
          <Link to={{ pathname: routes.booking }}>
            <Button outline>
              <MdArrowBack className="mr-2" />
              Back to Booking
            </Button>
          </Link>
        </CardHeader>
        <Card className="border">
          <CardHeader>
            Thank you <b>John Doe</b>
            <div>
              <small>
                <b>Your Booking in Skylight is Confirmed</b>
              </small>
            </div>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md={9} className="labelss">
                <div>
                  <MdDoneAll size={15} /> We've sent a confirmation message to
                  the email "Email"
                </div>
                <div>
                  <MdDoneAll size={15} /> You can Modify or cancel your booking
                  until check-in
                </div>
                <div>
                  <MdDoneAll size={15} /> Your payment will be handled by 'Hotel
                  name'. The price section below has more detail
                </div>
              </Col>
              <Col md={3}>
                <Button>
                  <MdPrint size={15} />
                  <div>Print Document</div>
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <h8>Check your Details</h8>
        <Card className="border">
          <CardHeader>
            Ethiopian Skylight Hotel
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar /> <MdStar />
          </CardHeader>
          <CardBody className="invoicing">
            <Row>
              <Col md={4}>
                <div>
                  <b> Confirmation Number</b>
                </div>
                <div>
                  <b> PIN Code</b>
                </div>
                <div>
                  <b> Booking Details</b>
                </div>
                <div>
                  <b> Check-in</b>
                </div>
                <div>
                  <b> Check-out</b>
                </div>
              </Col>
              <Col md={6}>
                <div>27263726318236</div>
                <div className="text-success">9905</div>
                <div>1 night, 1 room</div>
                <div>Friday, 20 December 2019(12:00-12:00)</div>
                <div>Saturday, 21 December 2019(until 10:00)</div>
              </Col>
            </Row>
            <Card className="border p-2 propertyDisplay">
              <div>
                <h8>One Room</h8>
                <div>
                  <small className="ml-3">15% VAT</small>
                </div>
              </div>
              <div>
                <h8>450 ETB</h8>
                <div>
                  <small className="ml-3">67.56 ETB</small>
                </div>
              </div>
              <div>
                <h8>
                  <b>Total</b>
                </h8>
                <div>
                  <small className="ml-3 text-success">517.65 ETB</small>
                </div>
              </div>
            </Card>
          </CardBody>
        </Card>
        <h8>Property Details</h8>
        <Card className="border">
          <CardHeader>
            Ethiopian Skylight Hotel
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar /> <MdStar />
          </CardHeader>
          <CardBody className="invoicing">
            <Row>
              <Col md={4}>
                <div>
                  <b> Address</b>
                </div>
                <div>
                  <b> Phone</b>
                </div>
                <div>
                  <b> Single Room</b>
                </div>
                <div>
                  <b> Guest Name</b>
                </div>
                <div>
                  <b> Children and Beds</b>
                </div>
              </Col>
              <Col md={6}>
                <div>Somewhere close to bole</div>
                <div> +251 921 25 8848 </div>
                <div className="text-success">
                  <MdDoneAll />
                </div>
                <div>Fasil Leykunbirhan</div>
                <div>
                  Children of any age are welcome, No costs or extra beds are
                  available
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <CardFooter>
          <Link to={{ pathname: routes.homePage }}>
            <Button color="success" block>
              Done
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
export default BookingConfirmation;
