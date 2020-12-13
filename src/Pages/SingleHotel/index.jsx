import React from "react";
import {
  HotelImagesContainer,
  Header,
  HotelInformation,
  RoomAvailability,
  HouseRules,
} from "./components";

const Index = () => {
  return (
    <div className="singleHotel bg-light">
      <Header />
      <HotelImagesContainer />
      <HotelInformation />
      <RoomAvailability />
      <HouseRules />
    </div>
  );
};
export default Index;
