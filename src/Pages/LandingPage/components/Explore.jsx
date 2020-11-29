import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";
import { Card, CardImg, Col, CardTitle } from "reactstrap";
import {
  Eleli,
  Eleli2,
  Intercontinental,
  Intercontinental2,
  Jupiter,
  Jupiter2,
  Sheraton2,
  Sheraton,
  Skylight,
  Skylight2,
} from "../../../Assets/HotelImages/HotelView";
import routes from "../../../Config/routes";

const hotel = [
  {
    hotelName: "Eleli International Hotel",
    location: "Somewhere",
    rating: "Some Star",
    image: Eleli,
  },
  {
    hotelName: "Item2",
    location: "Somewhere",
    rating: "Some Star",
    image: Eleli2,
  },
  {
    hotelName: "Item 3",
    location: "Somewhere",
    rating: "Some Star",
    image: Intercontinental,
  },
  {
    hotelName: "Item 4",
    location: "Somewhere",
    rating: "Some Star",
    image: Intercontinental2,
  },
  {
    hotelName: "Item 5",
    location: "Somewhere",
    rating: "Some Star",
    image: Jupiter2,
  },
  {
    hotelName: "Item 6",
    location: "Somewhere",
    rating: "Some Star",
    image: Jupiter,
  },
  {
    hotelName: "Item 7",
    location: "Somewhere",
    rating: "Some Star",
    image: Sheraton2,
  },
  {
    hotelName: "Item 8",
    location: "Somewhere",
    rating: "Some Star",
    image: Skylight,
  },
  {
    hotelName: "Item 1",
    location: "Somewhere",
    rating: "Some Star",
    image: Skylight2,
  },
  {
    hotelName: "Item 2",
    location: "Somewhere",
    rating: "Some Star",
    image: Sheraton,
  },
  {
    hotelName: "Item 3",
    location: "Somewhere",
    rating: "Some Star",
    image: Eleli,
  },
];

const Hotels = ({ text, location, image }) => {
  return (
    <Card className="menu-item bg-background">
      <CardImg src={image} />
      <CardTitle className="border-0 bg-background mt-2">
        <Col>
          <b>{text}</b>
        </Col>
        <Col>{location}</Col>
      </CardTitle>
    </Card>
  );
};

export const Menu = (hotel, selected) =>
  hotel.map((idx) => {
    const { hotelName, location, image } = idx;

    return (
      <Link to={{ pathname: routes.singleHotel }}>
        <Hotels
          text={hotelName}
          location={location}
          image={image}
          key={hotelName}
          // selected={selected}
        />
      </Link>
    );
  });

const Arrow = ({ icon, className }) => {
  return <div className={className}>{icon}</div>;
};

const ArrowLeft = Arrow({
  icon: <MdArrowBack size={15} />,
});
const ArrowRight = Arrow({
  icon: <MdArrowForward size={15} />,
});

const selected = "Item2";

class Booking extends Component {
  constructor(props) {
    super(props);
    this.Hotels = Menu(hotel, selected);
  }
  state = {
    selected,
  };

  onSelect = (key) => {
    this.setState({ selected: key });
  };

  render() {
    const { selected } = this.state;
    const menu = this.Hotels;

    return (
      <div className="exploreContainer">
        <div className="divider">
          <h6>Hotels</h6>
          <h7>These popular destinations have a lot to offer</h7>
        </div>

        <ScrollMenu
          dragging={false}
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          scrollBy={1}
          wheel={false}
        />
      </div>
    );
  }
}

export default Booking;
