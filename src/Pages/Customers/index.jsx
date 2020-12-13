import React from "react";
import { MdStar, MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Col, Row, Button } from "reactstrap";
import Avatar from "../../Components/Avatar";
import routes from "../../Config/routes";

const Customers = () => {
  return (
    <Card className=" mt-2 p-5 customersContainer">
      <CardHeader>These are your Loyal Customers</CardHeader>
      <CardBody>
        <Row>
          <Col md={6} sm={12} xs={12}>
            <Card className="p-3 shadows zoom customerCard">
              <Row>
                <Col align="center" className="mt-4" md={1} xs={1} sm={1}>
                  <h1>1</h1>
                </Col>
                <Col align="center" md={2} xs={12} sm={12}>
                  <Avatar size={100} />
                </Col>
                <Col>
                  <CardHeader className="customerCardHeader">
                    <h6>Yohannes Berhanu</h6>
                    <Button outline color="success">
                      <MdStar />
                      <MdStar />
                      <MdStar />
                    </Button>
                  </CardHeader>
                  <CardBody className="customerCardBody">
                    <div>
                      <b>Booking Times</b> : 44
                    </div>
                    <Link to={{ pathname: routes.profile }}>
                      <Button size="sm" outline>
                        {" "}
                        See Profile <MdArrowForward className="ml-1" />
                      </Button>
                    </Link>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <Card className="p-3 shadows zoom customerCard">
              <Row>
                <Col align="center" className="mt-4" md={1} xs={1} sm={1}>
                  <h1>2</h1>
                </Col>
                <Col align="center" md={2} xs={12} sm={12}>
                  <Avatar size={100} />
                </Col>
                <Col>
                  <CardHeader className="customerCardHeader">
                    <h6>Yonathan Abrham</h6>
                    <Button outline color="success">
                      <MdStar />
                      <MdStar />
                    </Button>
                  </CardHeader>
                  <CardBody className="customerCardBody">
                    <div>
                      <b>Booking Times</b> : 44
                    </div>
                    <Link to={{ pathname: routes.profile }}>
                      {" "}
                      <Button size="sm" outline>
                        {" "}
                        See Profile <MdArrowForward className="ml-1" />
                      </Button>
                    </Link>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <Card className="p-3 shadows zoom customerCard">
              <Row>
                <Col align="center" className="mt-4" md={1} xs={1} sm={1}>
                  <h1>3</h1>
                </Col>
                <Col align="center" md={2} xs={12} sm={12}>
                  <Avatar size={100} />
                </Col>
                <Col>
                  <CardHeader className="customerCardHeader">
                    <h6>Habtemichael Hadush</h6>
                    <Button outline color="success">
                      <MdStar />
                    </Button>
                  </CardHeader>
                  <CardBody className="customerCardBody">
                    <div>
                      <b>Booking Times</b> : 44
                    </div>
                    <Link to={{ pathname: routes.profile }}>
                      <Button size="sm" outline>
                        {" "}
                        See Profile <MdArrowForward className="ml-1" />
                      </Button>
                    </Link>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
export default Customers;
