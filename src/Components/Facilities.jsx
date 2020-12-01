import React from "react";
import {
  MdAttachMoney,
  MdCreditCard,
  MdFreeBreakfast,
  MdLocalDrink,
  MdLocalParking,
  MdLockOpen,
  MdRestaurant,
  MdSmokeFree,
  MdTerrain,
} from "react-icons/md";
import { Card, CardTitle, Col, Row } from "reactstrap";

export const FreeBreakfast = () => (
  <div className=" bg-success text-light">
    <MdFreeBreakfast className="mr-1" />
    Free Breakfast
  </div>
);
export const FreeParking = () => (
  <div className=" bg-success text-light">
    {" "}
    <MdLocalParking className="mr-1" /> Free parking
  </div>
);
export const Restaurant = () => (
  <div className=" bg-success text-light">
    {" "}
    <MdRestaurant className="mr-1" /> Restaurant
  </div>
);
export const Bar = () => (
  <div className=" bg-success text-light">
    {" "}
    <MdLocalDrink className="mr-1" /> Bar
  </div>
);
export const NoSmokingRooms = () => (
  <div className=" bg-success text-light">
    {" "}
    <MdSmokeFree className="mr-1" /> Non-Smoking Rooms
  </div>
);
export const TEA_COFFEE = () => (
  <div className=" bg-success text-light">
    {" "}
    <MdTerrain className="mr-1" /> Tea/Coffee Maker in All Rooms
  </div>
);
export const ATM = () => (
  <div className=" bg-success text-light">
    {" "}
    <MdAttachMoney className="mr-1" /> Need cash? There's an ATM and a currency
    exchange service at this property.
  </div>
);

// ============================== BOOKING INFORMATION ==============================

export const NO_BOOKING = () => (
  <Card className="p-5 m-1 bg-bgoffeatures">
    <Row>
      <Col md={1}>
        <MdCreditCard color="green" size={20} />
      </Col>
      <Col md={11}>
        <b>
          No credit card needed to book. We'll send you an email confirming your
          reservation.{" "}
        </b>
      </Col>
    </Row>
  </Card>
);

export const SOMETHING = () => (
  <Card className="p-5 m-1 bg-bgoffeatures">
    <Row>
      <Col md={1}>
        <MdLockOpen color="green" size={20} />
      </Col>
      <Col md={11}>
        <CardTitle>
          <b>Lock in a great price for your upcoming stay</b>
        </CardTitle>
        Prices might go up, so secure your reservation today.
      </Col>
    </Row>
  </Card>
);
