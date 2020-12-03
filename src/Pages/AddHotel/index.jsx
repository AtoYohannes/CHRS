import React from "react";
import { MDBStepper, MDBStep } from "mdbreact";
import {
  Col,
  Card,
  CardBody,
  Button,
  Row,
  CardHeader,
  FormGroup,
  Label,
  Input,
  Form,
} from "reactstrap";
import { MdLocationOn, MdPerson, MdStar } from "react-icons/md";

class StepperExample extends React.Component {
  state = {
    formActivePanel3: 1,
    formActivePanel1Changed: false,
  };

  swapFormActive = (a) => (param) => (e) => {
    this.setState({
      ["formActivePanel" + a]: param,
      ["formActivePanel" + a + "Changed"]: true,
    });
  };

  handleNextPrevClick = (a) => (param) => (e) => {
    this.setState({
      ["formActivePanel" + a]: param,
      ["formActivePanel" + a + "Changed"]: true,
    });
  };

  handleSubmission = () => {
    alert("Form submitted!");
  };

  calculateAutofocus = (a) => {
    if (this.state["formActivePanel" + a + "Changed"]) {
      return true;
    }
  };

  render() {
    return (
      <div className="addHotelContainer">
        <Card>
          <CardHeader align="center">Add your Hotel</CardHeader>
          <CardBody>
            <Row className="pt-5 justify-content-center">
              <Col align="center" md={12} className="pl-5 pl-md-0 pb-5">
                <MDBStepper icon>
                  <MDBStep
                    near
                    icon="folder-open"
                    stepName="Basic Information"
                    onClick={this.swapFormActive(3)(1)}
                  />
                  <MDBStep
                    icon="pencil-alt"
                    stepName="Personal Data"
                    onClick={this.swapFormActive(3)(2)}
                  />
                  <MDBStep
                    far
                    icon="image"
                    stepName="Terms and Conditions"
                    onClick={this.swapFormActive(3)(3)}
                  />
                  <MDBStep
                    icon="check"
                    stepName="Finish"
                    onClick={this.swapFormActive(3)(4)}
                  />
                  <MDBStep
                    icon="check"
                    stepName="Finish"
                    onClick={this.swapFormActive(3)(4)}
                  />
                </MDBStepper>
              </Col>

              <Col md={12}>
                {this.state.formActivePanel3 === 1 && (
                  <>
                    <Card className="p-3 mb-3" md={12}>
                      <Form>
                        <h6>
                          <strong>Basic Information</strong>
                        </h6>
                        <hr />
                        <FormGroup>
                          <Label>What's the name of your property?</Label>
                          <Input placeholder="Property Name" />
                          <small>
                            This Name will be seen by guests when they search
                            for a place to stay
                          </small>
                        </FormGroup>
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
                      </Form>
                    </Card>
                    <hr />

                    <Card className="p-3 mb-3" md={12}>
                      <Form>
                        <FormGroup>
                          <Label>
                            What are the contact details for this property?
                          </Label>
                          <hr />
                          <div>
                            <Label>Contact Name</Label>
                          </div>
                          <Input
                            className="mb-3"
                            placeholder="Contact Person"
                          />

                          <FormGroup>
                            <div>
                              <Label>Contact Number</Label>{" "}
                              <small>
                                (So we can assist with your Registration when
                                needed)
                              </small>
                            </div>
                            <Input type="number" placeholder="Contact Number" />
                          </FormGroup>
                        </FormGroup>
                      </Form>
                    </Card>
                    <Col md={12}>
                      <Row>
                        <Col md={5}>
                          <Card className="p-3 mb-3 border-0">
                            <Form>
                              <FormGroup>
                                <Label>Where is your property located?</Label>
                                <hr />
                                <div>
                                  <Label>Street Address</Label>
                                </div>
                                <Input
                                  className="mb-3"
                                  placeholder="Street Address"
                                />

                                <FormGroup>
                                  <div>
                                    <Label>Address Line 2</Label>{" "}
                                  </div>
                                  <Input placeholder="Address Line 2" />
                                </FormGroup>
                                <FormGroup>
                                  <div>
                                    <Label>City</Label>{" "}
                                  </div>
                                  <Input placeholder="City*" />
                                </FormGroup>
                              </FormGroup>
                            </Form>
                          </Card>
                        </Col>
                        <Col md={7}>
                          <Card className="p-5  border-0">
                            <CardHeader>
                              <MdLocationOn /> Your Address Matters
                            </CardHeader>
                            <CardBody>
                              Please make sure you enter the full address of
                              your property, including building name, number,
                              etc. Based on the information you provide we might
                              send a letter to verify this address.
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                      <FormGroup>
                        <Button
                          className="float-right"
                          onClick={this.handleNextPrevClick(3)(2)}
                        >
                          Next
                        </Button>
                      </FormGroup>
                    </Col>
                  </>
                )}
                {this.state.formActivePanel3 === 2 && (
                  <>
                    <Card className="p-3 mb-3" md={12}>
                      <Form>
                        <h6>
                          <strong>Layout and Pricing</strong>
                        </h6>
                        <hr />
                        <Row>
                          <Col md={6}>
                            <Label>
                              <b>Please Select</b>
                            </Label>
                            <FormGroup>
                              <Label>Room Type</Label>
                              <Input type="select">
                                <option value="N/A">Please Select</option>
                                <option value="1">1 Star</option>
                                <option value="N/A">2 Star</option>
                                <option value="N/A">3 Star</option>
                                <option value="N/A">4 Star</option>
                                <option value="N/A">5 Star</option>
                              </Input>
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <Label>.</Label>
                            <FormGroup>
                              <Label>Room Name</Label>
                              <Input type="text" />
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup>
                              <Label>Smoking Policy</Label>
                              <Input type="select">
                                <option value="N/A">No-Smoking</option>
                                <option value="1">1 Star</option>
                                <option value="N/A">2 Star</option>
                                <option value="N/A">3 Star</option>
                                <option value="N/A">4 Star</option>
                                <option value="N/A">5 Star</option>
                              </Input>
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup>
                              <Label>Number of Rooms (Of this type)</Label>
                              <Input type="number" />
                            </FormGroup>
                          </Col>
                        </Row>
                      </Form>
                    </Card>
                    <hr />
                    <Card className="p-3 mb-3" md={12}>
                      <h6>
                        <strong>Bed Options</strong>
                      </h6>
                      <Form>
                        <FormGroup>
                          <hr />
                          <Label>
                            Tell us only about the existing beds in a room. Do
                            not include extra beds
                          </Label>

                          <div>
                            <Label>
                              What kind of beds are available in this room?
                            </Label>
                          </div>
                          <Row>
                            <Col md={6} sm={12} xs={12}>
                              <Input className="mb-3" type="select">
                                <option>Singe Bed</option>
                              </Input>
                            </Col>
                            <Col md={6} sm={12} xs={12}>
                              <Input
                                className="mb-3"
                                placeholder="Contact Person"
                                type="select"
                              >
                                <option>Select the number of Beds</option>
                              </Input>
                            </Col>
                          </Row>

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
                        </FormGroup>
                      </Form>
                    </Card>
                    <Card className="p-3 mb-3" md={12}>
                      <h6>
                        <strong>Room Size (Optional)</strong>
                      </h6>
                      <Form>
                        <FormGroup>
                          <hr />
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
                      </Form>
                    </Card>
                    <Card className="p-3 mb-3" md={12}>
                      <h6>
                        <strong>Base price per night</strong>
                      </h6>
                      <Form>
                        <FormGroup>
                          <hr />
                          <Label>
                            this is the lowest price that automatically apply to
                            this room for all dates. before your property goes
                            live you can set seasonal pricing in your property
                            dashboard
                          </Label>

                          <Row>
                            <Col md={6} sm={12} xs={12}>
                              <FormGroup>
                                <Label>Price for 1 person</Label>
                                <Input
                                  className="mb-3"
                                  type="number"
                                  placeholder="0"
                                />
                              </FormGroup>
                            </Col>
                          </Row>

                          <FormGroup>
                            <Button
                              className="float-left"
                              onClick={this.handleNextPrevClick(3)(1)}
                            >
                              Previous
                            </Button>
                            <Button
                              className="float-right"
                              onClick={this.handleNextPrevClick(3)(3)}
                            >
                              Next
                            </Button>
                          </FormGroup>
                        </FormGroup>
                      </Form>
                    </Card>
                  </>
                )}
                {this.state.formActivePanel3 === 3 && (
                  <Col md={12}>
                    <h3 className="font-weight-bold pl-0 my-4">
                      <strong>Room Size (Optional)</strong>
                    </h3>
                    <Input
                      placeholder="I agreee to the terms and conditions"
                      type="checkbox"
                      id="checkbox3"
                      autoFocus={this.calculateAutofocus(3)}
                    />
                    <Input
                      placeholder="I want to receive newsletter"
                      type="checkbox"
                      id="checkbox4"
                    />
                    <Button
                      rounded
                      className="float-left"
                      onClick={this.handleNextPrevClick(3)(2)}
                    >
                      Previous
                    </Button>
                    <Button
                      rounded
                      className="float-right"
                      onClick={this.handleNextPrevClick(3)(4)}
                    >
                      Next
                    </Button>
                  </Col>
                )}
                {this.state.formActivePanel3 === 4 && (
                  <Col md={12}>
                    <h3 className="font-weight-bold pl-0 my-4">
                      <strong>Finish</strong>
                    </h3>
                    <h2 className="text-center font-weight-bold my-4">
                      Registration completed!
                    </h2>
                    <Button
                      outline
                      className="float-left"
                      onClick={this.handleNextPrevClick(3)(3)}
                    >
                      Previous
                    </Button>
                    <Button
                      color="success"
                      rounded
                      className="float-right"
                      onClick={this.handleSubmission}
                    >
                      submit
                    </Button>
                  </Col>
                )}
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default StepperExample;
