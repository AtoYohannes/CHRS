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
      hotelName: "Hotel2",
      location: "Somewhere",
      rating: "Some Star",
      image: Eleli2,
    },
    {
      hotelName: "Hotel 3",
      location: "Somewhere",
      rating: "Some Star",
      image: Intercontinental,
    },
    {
      hotelName: "Hotel 4",
      location: "Somewhere",
      rating: "Some Star",
      image: Intercontinental2,
    },
    {
      hotelName: "Hotel 5",
      location: "Somewhere",
      rating: "Some Star",
      image: Jupiter2,
    },
    {
      hotelName: "Hotel 6",
      location: "Somewhere",
      rating: "Some Star",
      image: Jupiter,
    },
    {
      hotelName: "Hotel 7",
      location: "Somewhere",
      rating: "Some Star",
      image: Sheraton2,
    },
    {
      hotelName: "Hotel 8",
      location: "Somewhere",
      rating: "Some Star",
      image: Skylight,
    },
    {
      hotelName: "Hotel 1",
      location: "Somewhere",
      rating: "Some Star",
      image: Skylight2,
    },
    {
      hotelName: "Hotel 2",
      location: "Somewhere",
      rating: "Some Star",
      image: Sheraton,
    },
    {
      hotelName: "Hotel 3",
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
      hotelName: "Hotel2",
      location: "Somewhere",
      rating: "Some Star",
      image: Eleli2,
    },
    {
      hotelName: "Hotel 3",
      location: "Somewhere",
      rating: "Some Star",
      image: Intercontinental,
    },
    {
      hotelName: "Hotel 4",
      location: "Somewhere",
      rating: "Some Star",
      image: Intercontinental2,
    },
    {
      hotelName: "Hotel 5",
      location: "Somewhere",
      rating: "Some Star",
      image: Jupiter2,
    },
    {
      hotelName: "Hotel 6",
      location: "Somewhere",
      rating: "Some Star",
      image: Jupiter,
    },
    {
      hotelName: "Hotel 7",
      location: "Somewhere",
      rating: "Some Star",
      image: Sheraton2,
    },
    {
      hotelName: "Hotel 8",
      location: "Somewhere",
      rating: "Some Star",
      image: Skylight,
    },
    {
      hotelName: "Hotel 1",
      location: "Somewhere",
      rating: "Some Star",
      image: Skylight2,
    },
    {
      hotelName: "Hotel 2",
      location: "Somewhere",
      rating: "Some Star",
      image: Sheraton,
    },
    {
      hotelName: "Hotel 3",
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
