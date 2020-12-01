import React from "react";
import { MdHotel, MdPinDrop, MdStar } from "react-icons/md";
import { Col, Row, Button } from "reactstrap";

const Header = () => {
  return (
    <div className="singleHotelHeader">
      <Row>
        <Col md={6}>
          <Row className="mb-1">
            <Col md={12} sm={12} xs={12}>
              <Row>
                <h4>Skylight International Hotel</h4>
                <b className="p-2">8.3</b>
              </Row>
            </Col>
            <Col>
              <div className="ratings">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <small>2,837,3527 Ratings</small>
              </div>
            </Col>
          </Row>
          <MdPinDrop className="text-primary" />{" "}
          <small className="pt-3">
            {" "}
            Namibia Street, Before Edna Mall Roundabout Before Edna Mall
            Roundabout, Bole, 1234 Addis{" "}
          </small>
        </Col>
        <Col md={6} align="right">
          <Button>
            <MdHotel className="text-light" />{" "}
            <b className="text-light">RESERVE</b>
          </Button>
        </Col>
      </Row>
    </div>
  );
};
export default Header;
