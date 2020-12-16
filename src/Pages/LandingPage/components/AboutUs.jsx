import React from "react";
import {
  MdAttachMoney,
  MdDirectionsCar,
  MdHotel,
  MdLocalParking,
  MdPerson,
  MdWifi,
} from "react-icons/md";
import { Card, Col, Row, CardHeader, CardTitle, CardText } from "reactstrap";

const Something = () => {
  const benefits = [
    {
      header: "Book your Room before you come!",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing",
      icon: <MdHotel size={80} />,
      color: "text-success border-0 elements",
    },
    {
      header: "Hundreds of Customers!",
      description: "elit. Ullam nulla officiis molestiae, debitis autem",
      icon: <MdPerson size={80} />,
      color: "text-info border-0 elements",
    },
    {
      header: "Select the Hotel that Fits your budget!",
      description: "incidunt fuga dignissimos a dolor dolorem, expedita",
      icon: <MdAttachMoney size={80} />,
      color: "text-warning border-0 elements",
    },
    {
      header: "Check Parking Availability",
      description: "quod! Nulla aspernatur unde officia hic laborum qui",
      icon: <MdLocalParking size={80} />,
      color: "text-teal border-0 elements",
    },
    {
      header: "WiFi",
      description: "repellendus?",
      icon: <MdWifi size={80} />,
      color: "text-cyan border-0 elements",
    },
    {
      header: "Need A Car Rental?",
      description: "repellendus?",
      icon: <MdDirectionsCar size={80} />,
      color: "text-secondary border-0 elements",
    },
  ];
  return (
    <div className="aboutUsContainer">
      <div className="aboutUsHeader">
        <h1>
          <b>What is CHRS?</b>
        </h1>
      </div>
      <div className="aboutUsBody">
        <hr />

        <h7>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis odio
          delectus magnam quae, dolorum recusandae blanditiis. Sunt suscipit
          minima nobis. Atque eius mollitia sit sequi necessitatibus, ab
          sapiente tenetur velit? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Temporibus nisi nihil illo at eaque explicabo
          cupiditate placeat doloribus facere harum esse cumque, molestiae
          asperiores! Quae nam commodi rem odio magni.
        </h7>
        <div>
          <Row className="mt-4">
            {benefits.map((benefit) => (
              <Col md={6} sm={12} xs={12}>
                <Card className="shadows zoom p-4 m-2">
                  <Row>
                    <Col sm={12} xs={12} md={4}>
                      <CardHeader className={benefit.color}>
                        {benefit.icon}
                      </CardHeader>
                    </Col>
                    <Col sm={12} xs={12} md={8}>
                      <CardTitle className={benefit.color}>
                        <b>{benefit.header}</b>
                      </CardTitle>
                      <CardText>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ullam nulla officiis molestiae, debitis autem
                        incidunt fuga dignissimos a dolor dolorem, expedita
                        quod! Nulla aspernatur unde officia hic laborum qui
                        repellendus?
                      </CardText>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};
export default Something;
