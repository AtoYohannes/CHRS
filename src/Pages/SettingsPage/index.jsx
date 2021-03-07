import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Avatar from "../../Components/Avatar";
import { Link } from "react-router-dom";
import routes from "../../Config/routes";
const Settings = () => {
  return (
    <Card className="settingsContainer">
      <CardHeader align="center">
        <Avatar size={250} />
        <Button className="mt-3" outline>
          Change Profile Picture
        </Button>
      </CardHeader>
      <CardBody>
        <Row>
          <Col md={6} sm={12} xs={12}>
            <FormGroup>
              <Label>First Name</Label>
              <Input placeholder="First Name" />
            </FormGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <FormGroup>
              <Label>Last Name</Label>
              <Input placeholder="Last Name" />
            </FormGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <FormGroup>
              <Label>Email</Label>
              <Input placeholder="Email" type="email" />
            </FormGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <FormGroup>
              <Label>Phone Number</Label>
              <Input placeholder="Phone Number" type="number" />
            </FormGroup>
          </Col>
        </Row>
      </CardBody>

      <CardFooter align="center">
        <Link to={{ pathname: routes.profile }}>
          <Button outline>Save Changes</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
export default Settings;
