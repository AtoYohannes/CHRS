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

const BasicInformation = () => {
  return (
    <>
      <CardHeader>
        <b>Basic Information</b>
      </CardHeader>
      <CardBody>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <FormGroup>
              <Label>Your Property Name</Label>
              <Input placeholder="Property Name" />
            </FormGroup>
          </Col>
          <Col md={12} sm={12} xs={12}>
            <FormGroup>
              <Label>Star Rating</Label>
              <Input type="select">
                <option value="N/A">N/A</option>
                <option value="1">1 Star</option>
                <option value="N/A">2 Star</option>
                <option value="N/A">3 Star</option>
                <option value="N/A">4 Star</option>
                <option value="N/A">5 Star</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <FormGroup>
              <Label>Contact Person</Label>
              <Input placeholder="Contact Person" />
            </FormGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <FormGroup>
              <Label>Contact Number</Label>
              <Input type="number" placeholder="Contact Number" />
            </FormGroup>
          </Col>
          <Col md={12} sm={12} xs={12}>
            <FormGroup>
              <Label>Street Address</Label>
              <Input placeholder="Street Address" />
            </FormGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <FormGroup>
              <Label>Address Line 2</Label>
              <Input placeholder="Address Line 2" />
            </FormGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <FormGroup>
              <Label>City</Label>
              <Input placeholder="City" />
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
    </>
  );
};
export default BasicInformation;
