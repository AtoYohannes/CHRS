import React from "react";
import { MdFilter } from "react-icons/md";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
  Button,
} from "reactstrap";

const FilterComponent = () => {
  return (
    <div>
      <Card className="filterComponentContainer shadows">
        <CardHeader>Filter Your Search Result</CardHeader>
        <CardBody>
          <Row>
            <Col sm={12} xs={12} md={12}>
              <FormGroup>
                <Label>Location</Label>
                <Input type="select">
                  <option>Addis Ababa</option>
                  <option>Adama</option>
                  <option>Hawassa</option>
                </Input>
              </FormGroup>
            </Col>
            <Col sm={12} xs={12} md={12}>
              <FormGroup>
                <Label>Price</Label>
                <Row>
                  <Col>
                    <Input type="number" placeholder="Min" />
                  </Col>
                  <Col>
                    <Input type="number" placeholder="Max" />
                  </Col>
                </Row>
              </FormGroup>
            </Col>
            <Col sm={12} xs={12} md={12}>
              <FormGroup>
                <Label>Stars</Label>
                <Input type="select">
                  <option>1 Star</option>
                  <option>2 Stars</option>
                  <option>3 Stars</option>
                  <option>4 Stars</option>
                  <option>5 Stars</option>
                </Input>
              </FormGroup>
            </Col>
            <Col sm={12} xs={12} md={12}>
              <FormGroup>
                <Label>Facilities</Label>
                <Row>
                  <Col md={6} sm={12} xs={12}>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" id="checkbox2" />{" "}
                        <div className="mt-1">Terrace </div>
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col md={6} sm={12} xs={12}>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" id="checkbox2" />{" "}
                        <div className="mt-1">Parking </div>
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col md={6} sm={12} xs={12}>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" id="checkbox2" />{" "}
                        <div className="mt-1">Free Breakfast </div>
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col md={6} sm={12} xs={12}>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" id="checkbox2" />{" "}
                        <div className="mt-1">Private Bathroom </div>
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col md={6} sm={12} xs={12}>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" id="checkbox2" />{" "}
                        <div className="mt-1">Restaurant </div>
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col md={6} sm={12} xs={12}>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" id="checkbox2" />{" "}
                        <div className="mt-1">Room Service </div>
                      </Label>
                    </FormGroup>
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
        <CardFooter align="center">
          <Button outline>
            <MdFilter /> Filter Your Search
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default FilterComponent;
