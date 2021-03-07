import React from "react";
import { MdDelete, MdVisibility } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, Table } from "reactstrap";
import routes from "../../../Config/routes";

const CustomersManagement = () => {
  return (
    <Card className="p-5 m-2">
      <CardHeader>CUSTOMERS MANAGEMENT</CardHeader>
      <CardBody>
        <Table responsive hover borderless>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Number of Bookings</th>
              <th>Number of Ratings</th>
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

              <td>
                <Link to={{ pathname: routes.profile }}>
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

              <td>
                <Link to={{ pathname: routes.profile }}>
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

              <td>
                <Link to={{ pathname: routes.profile }}>
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
export default CustomersManagement;
