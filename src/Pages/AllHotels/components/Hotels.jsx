import React from "react";
import { Card, CardBody, CardHeader, CardImg, Col, Row } from "reactstrap";
import { Intercontinental } from "../../../Assets/HotelImages/HotelView";

const HotelComponent = () => {
  return (
    <div>
      <Card className="border-0">
        <CardHeader>Hotel Component</CardHeader>
        <CardBody>
          <Card row className="AllItemsHotelContainer">
            <Row>
              <Col md={4} sm={12} xs={12}>
                <CardImg src={Intercontinental} />
              </Col>

              <Col className="hotelNames" md={8} sm={12} xs={12}>
                <CardHeader className="border-0">
                  Skylight International Hotel
                </CardHeader>
                <CardHeader className="border-0">Rating Goes Here</CardHeader>
              </Col>
            </Row>
          </Card>
        </CardBody>
      </Card>
    </div>
  );
};
export default HotelComponent;
