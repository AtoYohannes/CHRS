import React from "react";
import {
  MdChildFriendly,
  MdCreditCard,
  MdLockOpen,
  MdPets,
} from "react-icons/md";
import { Col, Row, Card, CardTitle } from "reactstrap";

const HouseRules = () => {
  return (
    <div className="houseRules">
      <h6>
        <b>House Rules</b>
      </h6>
      <Card className="p-5 m-1 bg-rules">
        <Row>
          <Col md={1}>
            <MdChildFriendly color="red" size={20} />
          </Col>
          <Col md={11}>
            <CardTitle>
              <b>Children of any Age are welcome</b>
            </CardTitle>
          </Col>
        </Row>
        <Row>
          <Col md={1}>
            <MdPets color="red" size={20} />
          </Col>
          <Col md={11}>
            <CardTitle>
              <b>Pets Are Not Allowed</b>
            </CardTitle>
          </Col>
        </Row>
        <Row>
          <Col md={1}>
            <MdCreditCard color="red" size={20} />
          </Col>
          <Col md={11}>
            <CardTitle>
              <b>Only Accepts Cash Payments</b>
            </CardTitle>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
export default HouseRules;
