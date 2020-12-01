import React from "react";
import { Carousel } from "react-responsive-carousel";
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

const HotelImagesContainer = () => {
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

  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showArrows={true}
        showThumbs={true}
      >
        {hotel.map((hotels) => (
          <div className="singleHotelImages">
            <img alt="" src={hotels.image} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default HotelImagesContainer;
