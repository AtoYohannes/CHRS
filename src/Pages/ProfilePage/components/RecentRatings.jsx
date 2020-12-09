import { Button, Card, CardHeader, Table } from "reactstrap";
import React from "react";
import { Link } from "react-router-dom";
import routes from "../../../Config/routes";
import { MdDelete } from "react-icons/md";

const RecentRatings = () => {
  return (
    <Card className="recentRatingContainer">
      <CardHeader>Your Ratings</CardHeader>
      <Table responsive striped borderless>
        <thead>
          <tr>
            <th>#</th>
            <th>Rated Hotel</th>
            <th>Rating</th>
            <th>Review</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>---</td>
            <td>
              <Link to={{ pathname: routes.rating }}>
                <Button className="mr-1" size="sm" outline>
                  Edit
                </Button>
              </Link>
              <Button outline color="danger">
                <MdDelete />
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>---</td>
            <td>
              <Link to={{ pathname: routes.rating }}>
                <Button className="mr-1" size="sm" outline>
                  Edit
                </Button>
                <Button outline color="danger">
                  <MdDelete />
                </Button>
              </Link>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>
              Exceptional, The Staff were amazing and the service was off the
              hook
            </td>
            <td>
              <Link to={{ pathname: routes.rating }}>
                <Button className="mr-1" size="sm" outline>
                  Edit
                </Button>
                <Button outline color="danger">
                  <MdDelete />
                </Button>
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
};
export default RecentRatings;
