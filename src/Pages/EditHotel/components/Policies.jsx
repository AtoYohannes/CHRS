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
const Policies = () => {
  return (
    <>
      <CardHeader>
        <b>Policies</b>
        <div>
          <small>
            Specify some basic Policies. Do you allow children or pets? how
            flexible are you with cancelations?
          </small>
        </div>
      </CardHeader>
      <CardBody>
        <Col md={12} xs={12} sm={12}>
          <Label>
            Can you Accomodate children? (You can specify the age and prices
            later)
          </Label>
          <Col md={12} sm={12} xs={12}>
            <FormGroup tag="fieldset">
              <Row>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> No
                  </Label>
                </FormGroup>
              </Row>
            </FormGroup>
          </Col>
        </Col>
        <Col md={12} xs={12} sm={12}>
          <Label>
            Some Guests like to travel with their furry friends. indicate if you
            allow pets and if any additional charges apply
          </Label>
          <Row>
            <Col md={6} sm={12} xs={12}>
              <FormGroup>
                <Label>Do you allow Pets?</Label>
                <Input type="select">
                  <option>Yes</option>
                  <option>No</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6} sm={12} xs={12}>
              <FormGroup>
                <Label>Any additional charges for Pets?</Label>
                <Input type="select">
                  <option>Pets can stay for free</option>
                  <option>They gotta pay bruh</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </Col>
      </CardBody>
    </>
  );
};
export default Policies;
