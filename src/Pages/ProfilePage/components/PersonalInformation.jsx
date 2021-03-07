import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Row,
} from "reactstrap";
import Avatar from "../../../Components/Avatar";
import routes from "../../../Config/routes";
const PersonalInformation = () => {
  return (
    <div>
      <Card className="personalInformationContainer">
        <Row>
          <Col align="center" md={4} sm={12} xs={12}>
            <Avatar size={200} />
          </Col>
          <Col md={8} sm={12} xs={12}>
            <Card className="border-0">
              <CardHeader>
                <h4>Yohannes Berhanu</h4>
              </CardHeader>
              <CardBody>
                <div>
                  <h7>Email Goes Here</h7>
                </div>
                <div>
                  <h7>Phone Number Goes Here</h7>
                </div>
                <div>
                  <h7>Phone Number Goes Here</h7>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <CardFooter align="center">
          <Link to={{ pathname: routes.settings }}>
            <Button outline>Update Your Personal Information</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
export default PersonalInformation;
