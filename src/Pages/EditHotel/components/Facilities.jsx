import React from "react";
import {
  Col,
  Row,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
const Facilities = () => {
  return (
    <>
      <CardHeader>
        <b>Facilities</b>
      </CardHeader>
      <CardBody>
        <Row>
          <Col md={6} sm={12} xs={12}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Free WiFi
              </Label>
            </FormGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Garden
              </Label>
            </FormGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Restaurant
              </Label>
            </FormGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Non-Smoking
              </Label>
            </FormGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Room Service
              </Label>
            </FormGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Family Rooms
              </Label>
            </FormGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Bar
              </Label>
            </FormGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Spa and Wellness Centre
              </Label>
            </FormGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Sauna
              </Label>
            </FormGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Water Park
              </Label>
            </FormGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Fitness Centre
              </Label>
            </FormGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Swimming Pool
              </Label>
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
    </>
  );
};
export default Facilities;
