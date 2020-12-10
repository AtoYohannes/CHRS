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
const Amenities = () => {
  return (
    <>
      <CardHeader>
        <b>Amenities</b>
      </CardHeader>
      <CardBody>
        <Row>
          <Col md={6} sm={12} xs={12}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Air Conditioning
              </Label>
            </FormGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Bath
              </Label>
            </FormGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Private Bathroom
              </Label>
            </FormGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Spa Bath
              </Label>
            </FormGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Flat-Screen Tv
              </Label>
            </FormGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Electric Kettle
              </Label>
            </FormGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Balcony
              </Label>
            </FormGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Terrace
              </Label>
            </FormGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> City View
              </Label>
            </FormGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Lake View
              </Label>
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
    </>
  );
};
export default Amenities;
