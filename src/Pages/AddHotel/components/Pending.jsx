import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImg,
} from "reactstrap";
import routes from "../../../Config/routes";
import Pending from "../../../Assets/Svg's/Pending.gif";

const PendingRequest = () => {
  return (
    <Card align="center" className="pendingRequestContainer mt-4 p-4">
      <CardHeader align="center">
        <h1>Your Request is Submitted to the Admin.</h1>
      </CardHeader>
      <CardBody align="center">
        <CardImg src={Pending} />
        <h4>Thank you for registering your Property</h4>
        <h5>
          Your Request is submitted to the Admins, you'll receive a notification
          once your property is reviewed and approved.
        </h5>
      </CardBody>
      <CardFooter clas align="center">
        <Link
          to={{ pathname: routes.profile }}
          style={{ textDecoration: "none" }}
        >
          <Button outline block>
            Done
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
export default PendingRequest;
