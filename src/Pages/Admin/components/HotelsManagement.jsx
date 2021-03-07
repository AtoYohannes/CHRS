import React from "react";
import { MdDelete, MdVisibility } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, Table } from "reactstrap";
import routes from "../../../Config/routes";

const HotelsManagement = () => {
  return (
    <Card className="p-5 m-2">
      <CardHeader>Hotels Management</CardHeader>
      <CardBody>
        <Table responsive hover borderless>
          <thead>
            <tr>
              <th>#</th>
              <th>Hotel Name</th>
              <th>Hotel Rating</th>
              <th>Location</th>
              <th>Facilities</th>
              <th>Amenities</th>
              <th>Bookings</th>
              <th>Reviews</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>
                <Link to={{ pathname: routes.singleHotel }}>
                  <Button className="mr-1" size="sm" outline>
                    <MdVisibility />
                  </Button>
                </Link>
                <Button outline color="danger">
                  <MdDelete />
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>
                <Link to={{ pathname: routes.singleHotel }}>
                  <Button className="mr-1" size="sm" outline>
                    <MdVisibility />
                  </Button>
                </Link>
                <Button outline color="danger">
                  <MdDelete />
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>
                <Link to={{ pathname: routes.singleHotel }}>
                  <Button className="mr-1" size="sm" outline>
                    <MdVisibility />
                  </Button>
                </Link>
                <Button outline color="danger">
                  <MdDelete />
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};
export default HotelsManagement;
