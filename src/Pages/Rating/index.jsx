import React from "react";
import {
  Card,
  CardImg,
  Col,
  ButtonGroup,
  Button,
  Input,
  CardFooter,
  CardHeader,
} from "reactstrap";
import { Skylight } from "../../Assets/HotelImages/HotelView";
import { MdArrowBack, MdFace, MdPerson, MdTagFaces } from "react-icons/md";
import { FaRegAngry } from "react-icons/fa";
import { Link } from "react-router-dom";
import routes from "../../Config/routes";
const Rating = () => {
  return (
    <div className="ratingsContainer">
      <Card className="p-2 mb-2">
        <CardHeader>
          <Link to={{ pathname: routes.singleHotel }}>
            <Button size="sm" outline>
              <MdArrowBack /> Back to Hotel View
            </Button>
          </Link>
        </CardHeader>
        <CardImg src={Skylight} />
        {/* <CardImgOverlay className="text-light">
          <h5>
            <b>Ethiopian Skylight Hotel</b>
          </h5>
        </CardImgOverlay> */}
        <Col className="divi">
          <h7>
            <b>1. Rate this Property</b>
          </h7>
          <Col>
            <h7>How was your Stay?</h7>
          </Col>
        </Col>
        <Col>
          <ButtonGroup>
            <Button outline size="sm">
              1
            </Button>
            <Button outline size="sm">
              2
            </Button>
            <Button outline size="sm">
              3
            </Button>
            <Button outline size="sm">
              4
            </Button>
            <Button outline size="sm">
              5
            </Button>
            <Button outline size="sm">
              6
            </Button>
            <Button outline size="sm">
              7
            </Button>
            <Button outline size="sm">
              8
            </Button>
            <Button outline size="sm">
              9
            </Button>
            <Button outline size="sm">
              10
            </Button>
          </ButtonGroup>
        </Col>
        <hr />
        <div className="spacingg">
          <Col md={12} sm={12} xs={12}>
            Staff
          </Col>
          <Col md={12} sm={12} xs={12} className="iconsRating">
            <FaRegAngry className="iconAngry" size={35} />
            <MdFace className="iconOkay" size={40} />
            <MdTagFaces className="icon" size={40} />
          </Col>
        </div>
        <div className="spacingg">
          <Col md={12} sm={12} xs={12}>
            Facilities
          </Col>
          <Col md={12} sm={12} xs={12} className="iconsRating">
            <FaRegAngry className="iconAngry" size={35} />
            <MdFace className="iconOkay" size={40} />
            <MdTagFaces className="icon" size={40} />
          </Col>
        </div>
        <div className="spacingg">
          <Col md={12} sm={12} xs={12}>
            Cleanliness
          </Col>
          <Col md={12} sm={12} xs={12} className="iconsRating">
            <FaRegAngry className="iconAngry" size={35} />
            <MdFace className="iconOkay" size={40} />
            <MdTagFaces className="icon" size={40} />
          </Col>
        </div>
        <div className="spacingg">
          <Col md={12} sm={12} xs={12}>
            Comfort
          </Col>
          <Col md={12} sm={12} xs={12} className="iconsRating">
            <FaRegAngry className="iconAngry" size={35} />
            <MdFace className="iconOkay" size={40} />
            <MdTagFaces className="icon" size={40} />
          </Col>
        </div>
        <div className="spacingg">
          <Col md={12} sm={12} xs={12}>
            Value For Money
          </Col>
          <Col md={12} sm={12} xs={12} className="iconsRating">
            <FaRegAngry className="iconAngry" size={35} />
            <MdFace className="iconOkay" size={40} />
            <MdTagFaces className="icon" size={40} />
          </Col>
        </div>
        <div className="spacingg">
          <Col md={12} sm={12} xs={12}>
            Location
          </Col>
          <Col md={12} sm={12} xs={12} className="iconsRating">
            <FaRegAngry className="iconAngry" size={35} />
            <MdFace className="iconOkay" size={40} />
            <MdTagFaces className="icon" size={40} />
          </Col>
        </div>
        <Col md={12} sm={12} xs={12} className="divi">
          <h7>
            <b>2. Could you tell us more? It'll only take a minute ...</b>
          </h7>
          <Col>
            <h7>What did you like or dislike?</h7>
          </Col>
        </Col>
        <Col sm={12} xs={12} md={12}>
          <Input className="border" type="textarea" />
        </Col>
      </Card>

      <Card className="p-2">
        <Col className="divi">
          <h7>
            <b>Preview your experience</b>
          </h7>
          <Col>
            <Input type="checkbox" /> include my name (This gives your review
            some extra personality)
          </Col>

          <Col className="mt-2">
            <MdPerson size={40} /> Anonymous
          </Col>
          <p>Very Good</p>
        </Col>
        <CardFooter>
          <Button outline block>
            Submit Rating
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Rating;
