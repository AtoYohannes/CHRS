import React from "react";
import { MdPerson } from "react-icons/md";
import { Card, Col, FormGroup, Input, Label, Row } from "reactstrap";

const RoomsAdd = () => {
  return (
    <Card className="p-3 border-0">
      <Row>
        <Col md={6} sm={12} xs={12}>
          <FormGroup>
            <Label>Room Type</Label>
            <Input type="select">
              <option value="N/A">Please Select</option>
              <option value="1">1 Star</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <FormGroup>
            <Label>Room Name</Label>
            <Input type="text" />
          </FormGroup>
        </Col>

        <Col md={6} sm={12} xs={12}>
          <FormGroup>
            <Label>Smoking Policy</Label>
            <Input type="select">
              <option value="N/A">No-Smoking</option>
              <option value="1">Smoking</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <FormGroup>
            <Label>Number of Rooms (Of this type)</Label>
            <Input type="number" />
          </FormGroup>
        </Col>
        <Col md={12} sm={12} xs={12}>
          <hr />
        </Col>
        <Col md={12} sm={12} xs={12}>
          <Label>What kind of beds are available in this room?</Label>
          <Row>
            <Col md={6} sm={12} xs={12}>
              <FormGroup>
                <Input className="mb-3" type="select">
                  <option>Singe Bed</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6} sm={12} xs={12}>
              <FormGroup>
                <Input
                  className="mb-3"
                  placeholder="Contact Person"
                  type="select"
                >
                  <option>Select the number of Beds</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6} sm={12} xs={12}>
              <FormGroup>
                <Label>How many guests can stay in this room</Label>
                <Row>
                  <Col md={9} sm={12} xs={12}>
                    <Input type="number" />
                  </Col>
                  <Col md={3} sm={12} xs={12}>
                    <MdPerson size={30} />
                  </Col>
                </Row>
              </FormGroup>
            </Col>
            <Col md={6} sm={12} xs={12}>
              <FormGroup>
                <Label>Room Size (Optional)</Label>
                <Row>
                  <Col md={6} sm={12} xs={12}>
                    <Input
                      className="mb-3"
                      type="number"
                      placeholder="number"
                    />
                  </Col>
                  <Col md={6} sm={12} xs={12}>
                    <Input className="mb-3" type="select">
                      <option>square meters</option>
                    </Input>
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Row>
        </Col>
        <Col md={12} sm={12} xs={12}>
          <hr />
        </Col>
        <Col md={6} sm={12} xs={12}>
          <FormGroup>
            <Label>Base Price Per Night</Label>
            <div>
              <Label>
                <small>
                  this is the lowest price that automatically apply to this room
                  for all dates. before your property goes live you can set
                  seasonal pricing in your property dashboard
                </small>
              </Label>
            </div>
            <Input type="number" placeholder=" Base Price Per Night" />
          </FormGroup>
        </Col>
      </Row>
    </Card>
  );
};
export default RoomsAdd;
