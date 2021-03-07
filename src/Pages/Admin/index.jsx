import React from "react";
import { MdHelpOutline, MdHotel, MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, Col, Row } from "reactstrap";
import routes from "../../Config/routes";

const AdminLandingPage = () => {
  return (
    <Card className="adminContainer p-5">
      <CardHeader align="center">
        <h6>Administrator</h6>
      </CardHeader>
      <Row>
        <Col md={6} sm={12} xs={12}>
          <Link
            style={{ textDecoration: "none" }}
            to={{ pathname: routes.customersManagement }}
          >
            <Card className="p-3 m-2 categoriesCard">
              <Col align="center">
                <MdPerson size={300} />
              </Col>
              <Col align="center">
                <CardTitle>
                  <h4>Customer Management</h4>
                </CardTitle>
              </Col>
            </Card>
          </Link>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <Link
            style={{ textDecoration: "none" }}
            to={{ pathname: routes.hotelsManagement }}
          >
            <Card className="p-3 m-2 categoriesCard">
              <Col align="center">
                <MdHotel size={300} />
              </Col>
              <Col align="center">
                <CardTitle>
                  <h4>Hotels Management</h4>
                </CardTitle>
              </Col>
            </Card>
          </Link>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <Link
            style={{ textDecoration: "none" }}
            to={{ pathname: routes.pendingHotelRequests }}
          >
            <Card className="p-3 m-2 categoriesCard">
              <Col align="center">
                <MdHelpOutline size={300} />
              </Col>
              <Col align="center">
                <CardTitle>
                  <h4>Pending Property Requests</h4>
                </CardTitle>
              </Col>
            </Card>
          </Link>
        </Col>
      </Row>
    </Card>
  );
};
export default AdminLandingPage;
