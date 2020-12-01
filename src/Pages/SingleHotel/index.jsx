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
    <div className="singleHotel">
      <Header />
      <HotelImagesContainer />
      <HotelInformation />
      <RoomAvailability />
      <HouseRules />
    </div>
  );
};
export default Index;
