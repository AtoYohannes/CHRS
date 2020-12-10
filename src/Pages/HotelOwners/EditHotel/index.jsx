import React, { Component } from "react";
import {
  Button,
  Card,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardHeader,
  CardBody,
  CardFooter,
} from "reactstrap";
import {
  Eleli,
  Eleli2,
  Intercontinental,
  Intercontinental2,
  Jupiter,
  Jupiter2,
  Sheraton2,
  Sheraton,
  Skylight,
  Skylight2,
} from "../../../Assets/HotelImages/HotelView";
import { Carousel } from "react-responsive-carousel";
import { MdPictureAsPdf, MdAdd, MdSave } from "react-icons/md";
import {
  Amenities,
  BasicInformation,
  Facilities,
  Policies,
  RoomsComponent,
  Services,
} from "./components";
import {
  // PicturesAdd,
  RoomsAdd,
} from "./components/Modals";

class EditHotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: false,
    };
  }
  render() {
    const images = [
      {
        image: Eleli,
      },
      {
        image: Eleli2,
      },
      {
        image: Intercontinental,
      },
      {
        image: Intercontinental2,
      },
      {
        image: Jupiter2,
      },
      {
        image: Jupiter,
      },
      {
        image: Sheraton2,
      },
      {
        image: Skylight,
      },
      {
        image: Skylight2,
      },
      {
        image: Sheraton,
      },
      {
        image: Eleli,
      },
      {
        image: Eleli,
      },
      {
        image: Eleli2,
      },
      {
        image: Intercontinental,
      },
      {
        image: Intercontinental2,
      },
      {
        image: Jupiter2,
      },
      {
        image: Jupiter,
      },
      {
        image: Sheraton2,
      },
      {
        image: Skylight,
      },
      {
        image: Skylight2,
      },
      {
        image: Sheraton,
      },
      {
        image: Eleli,
      },
    ];

    const toggle = () => {
      this.setState({
        isOpenModal: !this.state.isOpenModal,
      });
    };

    const { isOpenModal } = this.state;

    return (
      <>
        <Modal
          size="xl"
          className="modals"
          isOpen={isOpenModal}
          toggle={isOpenModal}
        >
          <ModalHeader toggle={toggle}>Add More Images</ModalHeader>
          <ModalBody>
            {" "}
            {/* <PicturesAdd /> */}
            <RoomsAdd />
          </ModalBody>
          <ModalFooter align="center">
            <Button size="sm" color="primary" onClick={toggle}>
              Add
            </Button>{" "}
            <Button size="sm" color="danger" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <Card className="p-3 m-4 editHotelContainer">
          <CardHeader align="center">
            <h3>Hotel Name</h3>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md={6} sm={12} xs={12}>
                <Carousel
                  autoPlay
                  infiniteLoop
                  showStatus={false}
                  showArrows={true}
                  showThumbs={false}
                >
                  {images.map((hotels) => (
                    <img alt="" src={hotels.image} />
                  ))}
                </Carousel>
                <div>
                  <Button className="mt-2" outline block onClick={toggle}>
                    {" "}
                    <MdPictureAsPdf /> Add More Pictures
                  </Button>
                </div>
              </Col>
              <Col md={6} sm={12} xs={12}>
                <BasicInformation />
              </Col>

              <Col md={12} sm={12} xs={12}>
                <hr />
              </Col>
              <Col md={6} sm={12} xs={12}>
                <CardHeader>
                  <b>Rooms In This Hotel</b>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md={6} sm={12} xs={12}>
                      <RoomsComponent />
                    </Col>
                    <Col md={6} sm={12} xs={12}>
                      <RoomsComponent />
                    </Col>
                    <Col md={6} sm={12} xs={12}>
                      <RoomsComponent />
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <Button onClick={toggle} block outline>
                    <MdAdd /> Add A New Room
                  </Button>
                </CardFooter>
              </Col>
              <Col md={6} sm={12} xs={12}>
                <Services />
              </Col>
              <Col md={12} xs={12} sm={12}>
                <hr />
              </Col>
              <Col md={6} sm={12} xs={12} className="hotelOwnerFacilities">
                <Facilities />
              </Col>
              {/* ============= AMENITIES ============= */}
              <Col md={6} sm={12} xs={12} className="hotelOwnerFacilities">
                <Amenities />
              </Col>
              {/* ============= POLICIES ============= */}
              <Col md={12} xs={12} sm={12}>
                <hr />
              </Col>
              <Col md={6} sm={12} xs={12} className="hotelOwnerFacilities">
                <Policies />
              </Col>
            </Row>
          </CardBody>
          <CardFooter align="center">
            <Button outline>
              <MdSave className="mr-3" /> Save Changes
            </Button>
          </CardFooter>
        </Card>
      </>
    );
  }
}
export default EditHotel;
