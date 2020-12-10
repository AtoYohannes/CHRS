import React from "react";
import {
  Card,
  Col,
  Row,
  CardHeader,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
const Services = () => {
  return (
    <>
      <CardHeader>
        <b>Services</b>
      </CardHeader>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Card className="p-3 mt-1">
            <Label>is Parking Available for Guests?</Label>
            <Row>
              <Col md={3} sm={12} xs={12}>
                <Input type="select">
                  <option value="N/A">Please Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Input>
              </Col>
              <Col md={3} sm={12} xs={12}>
                <Input type="select">
                  <option value="N/A">Public</option>
                </Input>
              </Col>
              <Col md={3} sm={12} xs={12}>
                <Input type="select">
                  <option value="N/A">Please Select</option>
                  <option value="1">On site</option>
                </Input>
              </Col>
              <Col md={3} sm={12} xs={12}>
                <Input
                  type="number"
                  placeholder="Price for Parking (Per-Day)"
                />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={12} sm={12} xs={12}>
          <Card className="p-3 mt-1">
            <Label>
              <b>Breakfast </b>
            </Label>
            <Row>
              <Col md={5} sm={12} xs={12}>
                <FormGroup>
                  <Label>is Breakfast Available for Guests?</Label>
                  <Input className="mb-3" type="select">
                    <option>Yes It's Optional</option>
                    <option>No</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={7} sm={12} xs={12}>
                <FormGroup>
                  <Label>
                    <small>
                      Price for breakfast (per person, per day including all
                      fees and taxes)
                    </small>
                  </Label>
                  <Input className="mb-3" type="number" />
                </FormGroup>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={12} sm={12} xs={12}>
          <Card className="p-3 mt-1">
            <Label>
              <b>Languages Spoken </b>
            </Label>
            <FormGroup>
              <Label>
                <small>What language do you or your staff speak?</small>
              </Label>
              <Input className="mb-3" type="select" placeholder="number">
                <option>Amharic</option>
                <option>English</option>
              </Input>
            </FormGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Services;
