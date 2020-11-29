import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { Card, CardImg, CardHeader, Col } from "reactstrap";
import image from "../../../Assets/Nunu.jpg";

const hotel = [
  { hotelName: "Item 1", location: "Somewhere", rating: "Some Star" },
  { hotelName: "Item 2", location: "Somewhere", rating: "Some Star" },
  { hotelName: "Item 3", location: "Somewhere", rating: "Some Star" },
  { hotelName: "Item 4", location: "Somewhere", rating: "Some Star" },
  { hotelName: "Item 5", location: "Somewhere", rating: "Some Star" },
  { hotelName: "Item 6", location: "Somewhere", rating: "Some Star" },
  { hotelName: "Item 7", location: "Somewhere", rating: "Some Star" },
  { hotelName: "Item 8", location: "Somewhere", rating: "Some Star" },
  { hotelName: "Item 1", location: "Somewhere", rating: "Some Star" },
  { hotelName: "Item 2", location: "Somewhere", rating: "Some Star" },
  { hotelName: "Item 3", location: "Somewhere", rating: "Some Star" },
  { hotelName: "Item 4", location: "Somewhere", rating: "Some Star" },
  { hotelName: "Item 5", location: "Somewhere", rating: "Some Star" },
  { hotelName: "Item 6", location: "Somewhere", rating: "Some Star" },
  { hotelName: "Item 7", location: "Somewhere", rating: "Some Star" },
  { hotelName: "Item 8", location: "Somewhere", rating: "Some Star" },
  { hotelName: "Item 1", location: "Somewhere", rating: "Some Star" },
  { hotelName: "Item 2", location: "Somewhere", rating: "Some Star" },
  { hotelName: "Item 3", location: "Somewhere", rating: "Some Star" },
  { hotelName: "Item 4", location: "Somewhere", rating: "Some Star" },
  { hotelName: "Item 5", location: "Somewhere", rating: "Some Star" },
  { hotelName: "Item 6", location: "Somewhere", rating: "Some Star" },
  { hotelName: "Item 7", location: "Somewhere", rating: "Some Star" },
  { hotelName: "Item 8", location: "Somewhere", rating: "Some Star" },
  { hotelName: "Item 9", location: "Somewhere", rating: "Some Star" },
];

const Hotels = ({ text, location }) => {
  return (
    <Card className="menu-item mb-2 bg-background">
      <CardImg src={image} />
      <CardHeader className='border-0 bg-background'>
          <Col>{text}</Col>
          <Col className='text-lowercase'>{location}</Col>
      </CardHeader>
    </Card>
  );
};

export const Menu = (hotel, selected) =>
  hotel.map((idx) => {
    const { hotelName, location } = idx;

    return (
      <Hotels
        text={hotelName}
        location={location}
        key={hotelName}
        selected={selected}
      />
    );
  });

const Arrow = ({ icon, className }) => {
  return <div className={className}>{icon}</div>;
};

const ArrowLeft = Arrow({
  icon: <MdArrowBack size={25} />,
});
const ArrowRight = Arrow({
  icon: <MdArrowForward size={25} />,
});

const selected = "item1";

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
        <ScrollMenu
          dragging={false}
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
          scrollBy={2}
          wheel={false}
        />
      </div>
    );
  }
}

export default Booking;
