import React from "react";
import { MdAdd, MdDoneAll, MdPerson } from "react-icons/md";
import { Button, Table } from "reactstrap";

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
            <th>
              Budget Single Room
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
            </th>
            <td>
              {" "}
              <MdPerson />
            </td>

            <td>Otto</td>
            <td>
              <Button>
                {" "}
                <MdAdd />
                Reserve
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">
              Deluxe Room
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
            </th>
            <td>
              <MdPerson />
            </td>
            <td>Thornton</td>
            <td>
              <Button>
                {" "}
                <MdAdd />
                Reserve
              </Button>
            </td>
          </tr>
          <tr>
            <th scope="row">
              Luxury Queen
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
            </th>
            <td>
              <MdPerson />
              <MdPerson />
              <MdPerson />
            </td>

            <td>the Bird</td>
            <td>
              <Button>
                {" "}
                <MdAdd />
                Reserve
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default RoomAvailability;
