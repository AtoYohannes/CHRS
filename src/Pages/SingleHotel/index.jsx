import React, { useEffect, useState } from "react";
import {
  HotelImagesContainer,
  Header,
  HotelInformation,
  RoomAvailability,
  HouseRules,
} from "./components";

const Index = (props) => {
  const [hotel, setHotel] = useState({});
  useEffect(() => {
    if (props.location.state) {
      let { hotel } = props.location.state;
      setHotel(hotel);
      console.log("====================================");
      console.log(hotel);
      console.log("====================================");
    }
  }, [props.location.state]);
  return (
    <div className="singleHotel bg-light">
      <Header hotel={hotel} />
      <HotelImagesContainer hotel={hotel} />
      <HotelInformation hotel={hotel} />
      <RoomAvailability hotel={hotel} />
      <HouseRules hotel={hotel} />
    </div>
  );
};
export default Index;
