import React from "react";
import { MdEdit, MdPinDrop, MdStar, MdStarBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { Col, Row, Button } from "reactstrap";
import routes from "../../../Config/routes";

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
          <Link to={{ pathname: routes.rating }}>
            <Button className="m-1">
              <MdStarBorder size={20} className="text-light" />{" "}
              <b className="text-light">RATE</b>
            </Button>
          </Link>
          <Link to={{ pathname: routes.editHotel }}>
            <Button className="m-1">
              <MdEdit size={20} className="text-light" />{" "}
              <b className="text-light">EDIT</b>
            </Button>
          </Link>
          <Link to={{ pathname: routes.allRatings }}>
            <Button className="m-1">
              <MdEdit size={20} className="text-light" />{" "}
              <b className="text-light">SEE RATINGS</b>
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
export default Header;
