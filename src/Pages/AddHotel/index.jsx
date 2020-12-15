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
import { MdLocationOn, MdPerson } from "react-icons/md";
import ImageUploader from "react-images-upload";
import { Link } from "react-router-dom";
import routes from "../../Config/routes";

class StepperExample extends React.Component {
  state = {
    formActivePanel4: 1,
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
    alert("Hotel Registered");
  };

  calculateAutofocus = (a) => {
    if (this.state["formActivePanel" + a + "Changed"]) {
      return true;
    }
  };
  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }

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
                    icon="dice-one"
                    stepName="Basic Information"
                    onClick={this.swapFormActive(4)(1)}
                  />
                  <MDBStep
                    icon="dice-two"
                    stepName="Layout and Pricing"
                    onClick={this.swapFormActive(4)(2)}
                  />
                  <MDBStep
                    icon="dice-three"
                    stepName="Facilities and Services"
                    onClick={this.swapFormActive(4)(3)}
                  />
                  <MDBStep
                    icon="dice-four"
                    stepName="Amenities and Policies"
                    onClick={this.swapFormActive(4)(4)}
                  />
                  <MDBStep
                    icon="image"
                    stepName="Image Uploading"
                    onClick={this.swapFormActive(4)(5)}
                  />
                </MDBStepper>
              </Col>

              <Col md={12}>
                {this.state.formActivePanel4 === 1 && (
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
                          onClick={this.handleNextPrevClick(4)(2)}
                        >
                          Next
                        </Button>
                      </FormGroup>
                    </Col>
                  </>
                )}
                {this.state.formActivePanel4 === 2 && (
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
                              onClick={this.handleNextPrevClick(4)(1)}
                            >
                              Previous
                            </Button>
                            <Button
                              className="float-right"
                              onClick={this.handleNextPrevClick(4)(3)}
                            >
                              Next
                            </Button>
                          </FormGroup>
                        </FormGroup>
                      </Form>
                    </Card>
                  </>
                )}
                {this.state.formActivePanel4 === 3 && (
                  <>
                    <h6>
                      <strong>Facilities And Services</strong>
                    </h6>
                    <small>
                      Now tell us some general details about your property, such
                      as facilities available, internet, parking and the
                      languages you speak
                    </small>
                    <hr />
                    <Card className="p-3 mb-3" md={12}>
                      <Form>
                        <CardHeader>
                          <h8>
                            <strong>Parking</strong>
                          </h8>
                        </CardHeader>
                        <Col md={12} xs={12} sm={12}>
                          <Label>
                            <small>
                              Tell us about your parking options in your
                              property ...
                            </small>
                          </Label>
                          <Row>
                            <Col md={4}>
                              <FormGroup>
                                <Label>
                                  <small>
                                    Is Parking Available for guests?
                                  </small>
                                </Label>
                                <Input type="select">
                                  <option value="N/A">Please Select</option>
                                  <option value="Yes">Yes</option>
                                  <option value="No">No</option>
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col md={4}>
                              <FormGroup>
                                <Label>..</Label>
                                <Input type="select">
                                  <option value="N/A">Public</option>
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col md={4}>
                              <FormGroup>
                                <Label>..</Label>
                                <Input type="select">
                                  <option value="N/A">Please Select</option>
                                  <option value="1">On site</option>
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col md={4} />
                            <Col md={4}>
                              <FormGroup>
                                <Label>
                                  <small>Price for parking (per day)</small>
                                </Label>
                                <Input type="number" />
                              </FormGroup>
                            </Col>
                            <Col md={4} />
                          </Row>
                        </Col>
                      </Form>
                    </Card>
                    <hr />
                    <Card className="p-3 mb-3" md={12}>
                      <h6>
                        <strong>Breakfast</strong>
                      </h6>
                      <Form>
                        <FormGroup>
                          <Row>
                            <Col md={12} sm={12} xs={12}>
                              <Label>is Breakfast Available for Guests?</Label>
                              <Input className="mb-3" type="select">
                                <option>Yes It's Optional</option>
                                <option>No</option>
                              </Input>
                            </Col>
                            <Col md={12} sm={12} xs={12}>
                              <Label>
                                Price for breakfast (per person, per day
                                including all fees and taxes)
                              </Label>

                              <Input className="mb-3" type="number" />
                            </Col>
                          </Row>
                        </FormGroup>
                      </Form>
                    </Card>
                    <Card className="p-3 mb-3" md={12}>
                      <h8>
                        <strong>Languages Spoken</strong>
                      </h8>
                      <Form>
                        <hr />
                        <Row>
                          <Col md={12} sm={12} xs={12}>
                            <FormGroup>
                              <Label>
                                What language do you or your staff speak?
                              </Label>
                              <Input
                                className="mb-3"
                                type="select"
                                placeholder="number"
                              >
                                <option>Amharic</option>
                                <option>English</option>
                              </Input>
                            </FormGroup>
                          </Col>
                        </Row>
                      </Form>
                    </Card>
                    <Card className="p-3 mb-3 facilities" md={12}>
                      <h6>
                        <strong>Facilities That are popular with guests</strong>
                      </h6>
                      <small>
                        Guests look for facilities the most when they are
                        searching for properties
                      </small>
                      <Form>
                        <Row>
                          <Col md={6} sm={12} xs={12}>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" id="checkbox2" /> Free
                                WiFi
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
                                <Input type="checkbox" id="checkbox2" />{" "}
                                Restaurant
                              </Label>
                            </FormGroup>
                          </Col>
                          <Col md={6} sm={12} xs={12}>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" id="checkbox2" />{" "}
                                Non-Smoking
                              </Label>
                            </FormGroup>
                          </Col>
                          <Col md={6} sm={12} xs={12}>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" id="checkbox2" /> Room
                                Service
                              </Label>
                            </FormGroup>
                          </Col>
                          <Col md={6} sm={12} xs={12}>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" id="checkbox2" /> Family
                                Rooms
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
                                <Input type="checkbox" id="checkbox2" /> Spa and
                                Wellness Centre
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
                                <Input type="checkbox" id="checkbox2" /> Water
                                Park
                              </Label>
                            </FormGroup>
                          </Col>
                          <Col md={6} sm={12} xs={12}>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" id="checkbox2" /> Fitness
                                Centre
                              </Label>
                            </FormGroup>
                          </Col>
                          <Col md={6} sm={12} xs={12}>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" id="checkbox2" />{" "}
                                Swimming Pool
                              </Label>
                            </FormGroup>
                          </Col>
                        </Row>
                      </Form>
                    </Card>
                    <FormGroup>
                      <Button
                        className="float-left"
                        onClick={this.handleNextPrevClick(4)(2)}
                      >
                        Previous
                      </Button>
                      <Button
                        className="float-right"
                        onClick={this.handleNextPrevClick(4)(4)}
                      >
                        Next
                      </Button>
                    </FormGroup>
                  </>
                )}
                {this.state.formActivePanel4 === 4 && (
                  <>
                    <h6>
                      <strong>Amenities</strong>
                    </h6>
                    <small>
                      You are nearly done. We just need a few more details about
                      the amenities or specific features and services available
                    </small>
                    <hr />
                    <Card className="p-3 mb-3 amenities" md={12}>
                      <Form>
                        <CardHeader>
                          <h8>
                            <strong>Amenities</strong>
                          </h8>
                        </CardHeader>
                        <Col md={12} xs={12} sm={12}>
                          <Label>Tell us about your Amenities</Label>
                          <div>
                            <Label>
                              <small>Mostly Requested by guests</small>
                            </Label>
                          </div>

                          <Row>
                            <Col md={12} sm={12} xs={12}>
                              <FormGroup check>
                                <Label check>
                                  <Input type="checkbox" id="checkbox2" /> Air
                                  Conditioning
                                </Label>
                              </FormGroup>
                            </Col>
                            <Col md={12} sm={12} xs={12}>
                              <FormGroup check>
                                <Label check>
                                  <Input type="checkbox" id="checkbox2" /> Bath
                                </Label>
                              </FormGroup>
                            </Col>
                            <Col md={12} sm={12} xs={12}>
                              <FormGroup check>
                                <Label check>
                                  <Input type="checkbox" id="checkbox2" />{" "}
                                  Private Bathroom
                                </Label>
                              </FormGroup>
                            </Col>
                            <Col md={12} sm={12} xs={12}>
                              <FormGroup check>
                                <Label check>
                                  <Input type="checkbox" id="checkbox2" /> Spa
                                  Bath
                                </Label>
                              </FormGroup>
                            </Col>
                            <Col md={12} sm={12} xs={12}>
                              <FormGroup check>
                                <Label check>
                                  <Input type="checkbox" id="checkbox2" />{" "}
                                  Flat-Screen Tv
                                </Label>
                              </FormGroup>
                            </Col>
                            <Col md={12} sm={12} xs={12}>
                              <FormGroup check>
                                <Label check>
                                  <Input type="checkbox" id="checkbox2" />{" "}
                                  Electric Kettle
                                </Label>
                              </FormGroup>
                            </Col>
                            <Col md={12} sm={12} xs={12}>
                              <FormGroup check>
                                <Label check>
                                  <Input type="checkbox" id="checkbox2" />{" "}
                                  Balcony
                                </Label>
                              </FormGroup>
                            </Col>
                            <Col md={12} sm={12} xs={12}>
                              <FormGroup check>
                                <Label check>
                                  <Input type="checkbox" id="checkbox2" />{" "}
                                  Terrace
                                </Label>
                              </FormGroup>
                            </Col>
                            <Col md={12} sm={12} xs={12}>
                              <FormGroup check>
                                <Label check>
                                  <Input type="checkbox" id="checkbox2" /> City
                                  View
                                </Label>
                              </FormGroup>
                            </Col>
                            <Col md={12} sm={12} xs={12}>
                              <FormGroup check>
                                <Label check>
                                  <Input type="checkbox" id="checkbox2" /> Lake
                                  View
                                </Label>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Form>
                    </Card>
                    <hr />
                    <h6>
                      <strong>Policies</strong>
                    </h6>
                    <small>
                      Specify some basic Policies. Do you allow children or
                      pets? how flexible are you with cancelations?
                    </small>
                    <hr />
                    <Card className="p-3 mb-3 amenities" md={12}>
                      <Form>
                        <CardHeader>
                          <h8>
                            <strong>Children</strong>
                          </h8>
                        </CardHeader>
                        <Col md={12} xs={12} sm={12}>
                          <Label>
                            Can you Accomodate children? (You can specify the
                            age and prices later)
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
                      </Form>
                    </Card>
                    <hr />
                    <Card className="p-3 mb-3 amenities" md={12}>
                      <Form>
                        <CardHeader>
                          <h8>
                            <strong>Pets</strong>
                          </h8>
                        </CardHeader>
                        <Col md={12} xs={12} sm={12}>
                          <Label>
                            Some Guests like to travel with their furry friends.
                            indicate if you allow pets and if any additional
                            charges apply
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
                      </Form>
                    </Card>
                    <hr />
                    <FormGroup>
                      <Button
                        outline
                        className="float-left"
                        onClick={this.handleNextPrevClick(4)(3)}
                      >
                        Previous
                      </Button>
                      <Button
                        className="float-right"
                        onClick={this.handleNextPrevClick(4)(5)}
                      >
                        Next
                      </Button>
                    </FormGroup>
                  </>
                )}
                {this.state.formActivePanel4 === 5 && (
                  <>
                    <h6>
                      <strong>Property Photos</strong>
                    </h6>
                    <small>
                      Great photos invite Guests to get full experience of your
                      property. so upload some high-resolution photos that
                      represent all your property has to offer. We will display
                      these photos on your property's page on CHRS website
                    </small>
                    <hr />
                    <Card className="p-3 mb-3 amenities" md={12}>
                      <Form>
                        <CardHeader>
                          <h8>
                            <strong>Photo Gallery</strong>
                          </h8>
                        </CardHeader>
                        <Col sm={12} md={12} xs={12}>
                          <ImageUploader
                            label="Max file size: 2mb, accepted: jpg png"
                            withIcon={true}
                            withPreview={true}
                            buttonText="Choose Your Hotel Pictures"
                            onChange={this.onDrop}
                            imgExtension={[".jpg", ".png"]}
                            maxFileSize={2242880}
                          />
                        </Col>
                      </Form>
                    </Card>
                    <hr />
                    <FormGroup>
                      <Button
                        outline
                        className="float-left"
                        onClick={this.handleNextPrevClick(4)(4)}
                      >
                        Previous
                      </Button>
                      <Link to={{ pathname: routes.pending }}>
                        <Button
                          color="success"
                          rounded
                          className="float-right"
                          //TODO : Make sure you submit the Data before proceeding to the pending page
                          // onClick={this.handleSubmission}
                        >
                          Submit Hotel
                        </Button>
                      </Link>
                    </FormGroup>
                  </>
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
