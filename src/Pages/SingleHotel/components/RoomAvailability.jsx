import React from "react";
import { MdAdd, MdDoneAll, MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button, Table } from "reactstrap";
import routes from "../../../Config/routes";

const RoomAvailability = () => {
  return (
    <div className="roomAvailability">
      <h6>
        <b>Room Availability</b>
      </h6>
      <Table responsive>
        <thead>
          <tr>
            <th>Room Type</th>
            <th>Sleeps</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>Budget Single Room</b>
              <div>
                <div className="feature">
                  <MdDoneAll color="green" /> one bed
                </div>
                <div className="feature">
                  <MdDoneAll color="green" /> two bed
                </div>
                <div className="feature">
                  <MdDoneAll color="green" /> three bed
                </div>{" "}
              </div>
            </td>
            <td>
              {" "}
              <MdPerson />
            </td>

            <td>Otto</td>
            <td>
              <Link to={{ pathname: routes.booking }}>
                <Button>
                  {" "}
                  <MdAdd />
                  Reserve
                </Button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <b>Deluxe Room</b>
              <div>
                <div className="feature">
                  <MdDoneAll color="green" /> one bed
                </div>
                <div className="feature">
                  <MdDoneAll color="green" /> two bed
                </div>
                <div className="feature">
                  <MdDoneAll color="green" /> three bed
                </div>{" "}
              </div>
            </td>
            <td>
              <MdPerson />
            </td>
            <td>Thornton</td>
            <td>
              <Link to={{ pathname: routes.booking }}>
                <Button>
                  {" "}
                  <MdAdd />
                  Reserve
                </Button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <b>Luxury Queen</b>
              <div>
                <div className="feature">
                  <MdDoneAll color="green" /> one bed
                </div>
                <div className="feature">
                  <MdDoneAll color="green" /> two bed
                </div>
                <div className="feature">
                  <MdDoneAll color="green" /> three bed
                </div>{" "}
              </div>
            </td>
            <td>
              <MdPerson />
              <MdPerson />
              <MdPerson />
            </td>
            <td>the Bird</td>
            <td>
              <Link to={{ pathname: routes.booking }}>
                <Button>
                  {" "}
                  <MdAdd />
                  Reserve
                </Button>
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default RoomAvailability;
