import React from "react";
import { Link } from "react-router-dom";
import { Card, CardTitle, Row, Col, CardText } from "reactstrap";
import Avatar from "../../../Components/Avatar";
import RatingComponent from "../../../Components/RatingComponent";
import routes from "../../../Config/routes";

const RatingsComponent = () => {
  return (
    <Link
      to={{ pathname: routes.profile }}
      style={{
        textDecoration: "none",
      }}
    >
      <Card className="p-3 m-2 ratingsCard zoom">
        <Row>
          <Col align="center" md={4}>
            <Avatar size={80} />
          </Col>
          <Col>
            <CardTitle>
              <RatingComponent />
            </CardTitle>
            <hr />
            <CardText>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                necessitatibus libero dolorum incidunt enim possimus
                exercitationem debitis recusandae dicta illum beatae expedita,
                praesentium provident! Eum ex nisi quidem repellat magnam.
              </small>
            </CardText>
          </Col>
        </Row>
      </Card>
    </Link>
  );
};
export default RatingsComponent;
