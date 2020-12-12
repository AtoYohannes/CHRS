import React from "react";
import {
  MdCreditCard,
  MdEdit,
  MdPinDrop,
  MdStarBorder,
  MdVisibility,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { Col, Row, Button } from "reactstrap";
import RatingComponent from "../../../Components/RatingComponent";
import routes from "../../../Config/routes";
import { BackDrop, SlidingDrawer } from "../../../Components/Drawer";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      scrollTop: 0,
      scrolled: false,
      drawerOpen: false,
      type: "",
    };
  }

  drawerToggleClickHandler = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen,
    });
  };
  backdropClickHandler = () => {
    this.setState({
      drawerOpen: false,
    });
  };
  render() {
    let backdrop;
    if (this.state.drawerOpen) {
      backdrop = <BackDrop close={this.backdropClickHandler} />;
    }

    return (
      <div className="singleHotelHeader">
        <SlidingDrawer show={this.state.drawerOpen} type={this.state.type} />
        {backdrop}

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
                  <Row>
                    <RatingComponent />
                    <Col>
                      <small>2,837 Ratings</small>
                    </Col>
                  </Row>
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
            {/* <Link to={{ pathname: routes.rating }}> */}
            <Button
              className="m-1"
              onClick={() => this.drawerToggleClickHandler()}
            >
              <MdStarBorder size={20} className="text-light" />{" "}
              <b className="text-light">Rate</b>
            </Button>
            {/* </Link> */}
            <Link to={{ pathname: routes.editHotel }}>
              <Button className="m-1">
                <MdEdit size={20} className="text-light" />{" "}
                <b className="text-light">Edit</b>
              </Button>
            </Link>
            <Link to={{ pathname: routes.allRatings }}>
              <Button className="m-1">
                <MdVisibility size={20} className="text-light" />{" "}
                <b className="text-light">See Ratings</b>
              </Button>
            </Link>
            <Link to={{ pathname: routes.recentBookings }}>
              <Button className="m-1">
                <MdCreditCard size={20} className="text-light" />{" "}
                <b className="text-light">Recent Reservations</b>
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Header;
