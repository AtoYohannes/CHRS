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
  Form,
} from "reactstrap";
import { MdArrowBack, MdLocationOn } from "react-icons/md";
import Joi from "joi-browser";
import ParentForm from "../common/form";
import { getBedTypes, loadbedTypes } from "../../store/bedTypes";
import { getRoomTypes, loadroomTypes } from "../../store/roomTypes";
import { getRoomNames, loadroomNames } from "../../store/roomNames";
import { connect } from "react-redux";
import { getFacilitys, loadfacilitys } from "../../store/facilities";
import { upload } from "../../services/uploadService";
import { toast } from "react-toastify";
import { addHotel } from "../../store/hotels";
import { getUser } from "../../services/authService";
class StepperExample extends ParentForm {
  state = {
    formActivePanel4: 1,
    formActivePanel1Changed: false,
    data: {
      hotelName: "",
      star: "",
      contactName: "",
      contactNumber: "",
      streetAdress: "",
      city: "",
      facilities: [],
      pictures: [],
      isParkingAvailable: "",
      isBreakFastAvailable: "",
      language: "",
      isChildrenAllowed: "",
      isPetsAllowed: "",
      roomName: "",
      roomType: "",
      bedType: "",
      quantity: "",
      guestMaxCapacity: "",
      isSmokingAllowed: "",
      price: "",
      userId: getUser() && getUser()._id,
    },
    errors: {},
    selectedFile: "",
  };

  schema = {
    hotelName: Joi.string(),
    star: Joi.string(),
    contactName: Joi.string(),
    contactNumber: Joi.string(),
    streetAdress: Joi.string(),
    city: Joi.string(),
    facilities: Joi.array(),
    isParkingAvailable: Joi.string(),
    isBreakFastAvailable: Joi.string(),
    language: Joi.string(),
    isChildrenAllowed: Joi.string(),
    isPetsAllowed: Joi.string(),
    pictures: Joi.array(),
    roomName: Joi.string(),
    roomType: Joi.string(),
    bedType: Joi.string(),
    quantity: Joi.string(),
    guestMaxCapacity: Joi.string(),
    isSmokingAllowed: Joi.string(),
    price: Joi.string(),
    userId: Joi.string(),
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

  componentDidMount() {
    this.props.loadBedTypes();
    this.props.loadRoomNames();
    this.props.loadRoomTypes();
    this.props.loadFacilities();
  }

  handleUpload = async () => {
    //upload file
    const { selectedFile } = this.state;
    if (selectedFile) {
      try {
        const formData = this.getFormData(selectedFile);
        const data = { ...this.state.data };
        const {
          data: { fileUrl },
        } = await upload(formData, this.getProgressConfig());
        data.pictures.push(fileUrl);
        this.setState({ data });
        toast.success("upload success");
      } catch (ex) {
        console.log(ex);
        toast.error("upload fail");
      }
    } else {
      console.log("Choose file first");
    }
  };

  doSubmit = () => {
    alert();
    console.log(this.state.data);
    this.props.addHotel(this.state.data);
  };

  render() {
    return (
      <div className="addHotel p-5">
        <Card className="addHotelContainer shadows mb-5">
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
              <Form onSubmit={this.handleSubmit}>
                <Col md={12}>
                  {this.state.formActivePanel4 === 1 && (
                    <>
                      <Card className="p-3 mb-3" md={12}>
                        <h6>
                          <strong>Basic Information</strong>
                        </h6>
                        <hr />
                        {this.renderInput(
                          "hotelName",
                          "What's the name of your property?"
                        )}
                        {this.renderSelect("star", "Star Rating", [
                          "None",
                          1,
                          2,
                          4,
                          5,
                        ])}
                      </Card>
                      <hr />
                      <Card className="p-3 mb-3" md={12}>
                        <Label>
                          What are the contact details for this property?
                        </Label>
                        <hr />
                        {this.renderInput("contactName", "Contact Name")}
                        {this.renderInput("contactNumber", "Contact Number")}
                      </Card>
                      <Col md={12}>
                        <Row>
                          <Col md={5}>
                            <Card className="p-3 mb-3 border-0">
                              <Label>Where is your property located?</Label>
                              <hr />
                              {this.renderInput(
                                "streetAdress",
                                "Street Address"
                              )}
                              {this.renderInput("city", "City")}
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
                                etc. Based on the information you provide we
                                might send a letter to verify this address.
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
                        <h6>
                          <strong>Layout and Pricing</strong>
                        </h6>
                        <hr />
                        <Row>
                          <Col md={6}>
                            {this.renderSelect(
                              "roomType",
                              "Room Type",
                              this.props.roomTypes,
                              "server"
                            )}
                          </Col>
                          <Col md={6}>
                            {this.renderSelect(
                              "roomName",
                              "RoomName",
                              this.props.roomNames,
                              "server"
                            )}
                          </Col>
                          <Col md={6}>
                            {this.renderSelect(
                              "isSmokingAllowed",
                              "Is Smoking Allowed",
                              ["Yes", "No"]
                            )}
                          </Col>
                          <Col md={6}>
                            {this.renderInput(
                              "quantity",
                              "Number of Rooms (Of this type)"
                            )}
                          </Col>
                        </Row>
                      </Card>
                      <hr />
                      <Card className="p-3 mb-3" md={12}>
                        <h6>
                          <strong>Bed Options</strong>
                        </h6>
                        <FormGroup>
                          <hr />
                          <Label>
                            Tell us only about the existing beds in a room. Do
                            not include extra beds
                          </Label>

                          <Row>
                            <Col md={6} sm={12} xs={12}>
                              {this.renderSelect(
                                "bedType",
                                "What kind of beds are available in this room?",
                                this.props.bedTypes,
                                "server"
                              )}
                            </Col>
                            {/* <Col md={6} sm={12} xs={12}>
                              <Input
                                className="mb-3"
                                placeholder="Contact Person"
                                type="select"
                              >
                                <option>Select the number of Beds</option>
                              </Input>
                            </Col> */}
                          </Row>
                          {this.renderInput(
                            "guestMaxCapacity",
                            "How many guests can stay in this room",
                            "number"
                          )}
                        </FormGroup>
                      </Card>
                      {/* <Card className="p-3 mb-3" md={12}>
                        <h6>
                          <strong>Room Size (Optional)</strong>
                        </h6>
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
                      </Card> */}
                      <Card className="p-3 mb-3" md={12}>
                        <h6>
                          <strong>Base price per night</strong>
                        </h6>
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
                              {this.renderInput(
                                "price",
                                "Price for 1 person",
                                "number"
                              )}
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
                      </Card>
                    </>
                  )}
                  {this.state.formActivePanel4 === 3 && (
                    <>
                      <h6>
                        <strong>Facilities And Services</strong>
                      </h6>
                      <small>
                        Now tell us some general details about your property,
                        such as facilities available, internet, parking and the
                        languages you speak
                      </small>
                      <hr />
                      <Card className="p-3 mb-3" md={12}>
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
                            <Col md={12}>
                              {this.renderSelect(
                                "isParkingAvailable",
                                "Is Parking Available for guests?",
                                ["Yes", "No"]
                              )}
                            </Col>
                            <Col md={4} />
                          </Row>
                        </Col>
                      </Card>
                      <hr />
                      <Card className="p-3 mb-3" md={12}>
                        <h6>
                          <strong>Breakfast</strong>
                        </h6>
                        {this.renderSelect(
                          "isBreakFastAvailable",
                          "is Breakfast Available for Guests?",
                          ["Yes", "No"]
                        )}
                      </Card>
                      <Card className="p-3 mb-3" md={12}>
                        <h8>
                          <strong>Languages Spoken</strong>
                        </h8>
                        <hr />
                        <Row>
                          <Col md={12} sm={12} xs={12}>
                            {this.renderSelect(
                              "language",
                              "What language do you or your staff speak?",
                              ["Amharic", "English"]
                            )}
                          </Col>
                        </Row>
                      </Card>
                      <Card className="p-3 mb-3 facilities" md={12}>
                        <h6>
                          <strong>
                            Facilities That are popular with guests
                          </strong>
                        </h6>
                        <small>
                          Guests look for facilities the most when they are
                          searching for properties
                        </small>
                        <Row>
                          {this.props.facilities
                            .filter(
                              (facility) =>
                                facility.category.name === "hotel services"
                            )
                            .map((facility) => (
                              <Col md={6} sm={12} xs={12}>
                                {this.renderCheckbox2(
                                  "facilities",
                                  facility.name
                                )}
                              </Col>
                            ))}
                        </Row>
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
                        You are nearly done. We just need a few more details
                        about the or specific features and services available
                      </small>
                      <hr />
                      <Card className="p-3 mb-3 " md={12}>
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
                            {this.props.facilities
                              .filter(
                                (facility) =>
                                  facility.category.name === "room services"
                              )
                              .map((facility) => (
                                <Col md={12} sm={12} xs={12}>
                                  {this.renderCheckbox2(
                                    "facilities",
                                    facility.name
                                  )}
                                </Col>
                              ))}
                          </Row>
                        </Col>
                      </Card>
                      <hr />
                      <h6>
                        <strong>Policies</strong>
                      </h6>
                      <small>
                        Specify some basic Policies. Do you allow children or
                        pets?
                      </small>
                      <hr />
                      <Card className="p-3 mb-3 " md={12}>
                        <CardHeader>
                          <h8>
                            <strong>Children</strong>
                          </h8>
                        </CardHeader>
                        <Col md={12} xs={12} sm={12}>
                          {this.renderSelect(
                            "isChildrenAllowed",
                            "Can you Accomodate children?",
                            ["Yes", "No"]
                          )}
                        </Col>
                      </Card>
                      <hr />
                      <Card className="p-3 mb-3 " md={12}>
                        <CardHeader>
                          <h8>
                            <strong>Pets</strong>
                          </h8>
                        </CardHeader>
                        <Col md={12} xs={12} sm={12}>
                          <Label>
                            Some Guests like to travel with their furry friends.
                            indicate if you allow pets.
                          </Label>
                          <Row>
                            <Col md={12} sm={12} xs={12}>
                              {this.renderSelect(
                                "isPetsAllowed",
                                "Do you allow Pets?",
                                ["Yes", "No"]
                              )}
                            </Col>
                          </Row>
                        </Col>
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
                        Great photos invite Guests to get full experience of
                        your property. so upload some high-resolution photos
                        that represent all your property has to offer. We will
                        display these photos on your property's page on CHRS
                        website
                      </small>
                      <hr />
                      <Card className="p-3 mb-3 " md={12}>
                        <CardHeader>
                          <h8>
                            <strong>Photo Gallery</strong>
                          </h8>
                        </CardHeader>
                        <Col sm={12} md={12} xs={12}>
                          {/* <ImageUploader
                            label="Max file size: 2mb, accepted: jpg png"
                            withIcon={true}
                            withPreview={true}
                            buttonText="Choose Your Hotel Pictures"
                            onChange={this.onDrop}
                            imgExtension={[".jpg", ".png"]}
                            maxFileSize={2242880}
                          /> */}

                          {this.renderFileInput("selectedFile", "")}
                        </Col>
                      </Card>
                      <hr />
                      <FormGroup>
                        {/* <Link to={{ pathname: routes.pending }}> */}
                        {this.renderButton("Submit")}
                        {/* </Link> */}
                        <Button
                          outline
                          block
                          size="sm"
                          onClick={this.handleNextPrevClick(4)(4)}
                        >
                          <MdArrowBack className="m-2" /> Previous
                        </Button>
                      </FormGroup>
                    </>
                  )}
                </Col>
              </Form>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bedTypes: getBedTypes(state),
  roomTypes: getRoomTypes(state),
  roomNames: getRoomNames(state),
  facilities: getFacilitys(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadBedTypes: () => dispatch(loadbedTypes()),
  loadRoomTypes: () => dispatch(loadroomTypes()),
  loadRoomNames: () => dispatch(loadroomNames()),
  loadFacilities: () => dispatch(loadfacilitys()),
  addHotel: (hotel) => dispatch(addHotel(hotel)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StepperExample);
