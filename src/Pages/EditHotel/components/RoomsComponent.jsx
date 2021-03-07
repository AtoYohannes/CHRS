import React from "react";
import {
  Button,
  Card,
  Col,
  Row,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap";
import {
  MdDelete,
  MdEdit,
  MdHotel,
  MdPerson,
  MdSmokeFree,
} from "react-icons/md";

const Rooms = () => {
  return (
    <div>
      <Card className="pt-3 pl-3 pr-3 mb-2 rooms">
        <CardTitle>
          <h6>Deluxe 101</h6>
        </CardTitle>
        <div className="pb-3">
          <Col>
            <Row>
              <Col md={6} sm={12} xs={12}>
                <CardText>
                  {" "}
                  <MdSmokeFree className="mr-1" />
                  No Smoking
                </CardText>
              </Col>

              <Col md={3} sm={12} xs={12}>
                <CardText>
                  {" "}
                  <MdHotel /> 5
                </CardText>
              </Col>
              <Col md={3} sm={12} xs={12}>
                <CardText>
                  {" "}
                  <MdPerson /> 2
                </CardText>
              </Col>
            </Row>
          </Col>
        </div>
        <CardFooter className="roomsFooterContainer">
          <Button outline className="border-0" color="warning">
            <MdEdit />
          </Button>
          <Button outline className="border-0" color="danger">
            <MdDelete />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Rooms;
