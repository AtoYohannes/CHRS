import React from "react";
import { MdAdd, MdHotel } from "react-icons/md";
import { Button, Table } from "reactstrap";

const RoomAvailability = () => {
  return (
    <div className="roomAvailability">
      <h6>
        <b>Room Availability</b>
      </h6>
      <Table borderless responsive>
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
                  <MdHotel color="green" /> one bed
                </div>
                <div className="feature">
                  <MdHotel color="green" /> two bed
                </div>
                <div className="feature">
                  <MdHotel color="green" /> two bed
                </div>{" "}
              </div>
            </th>
            <td>Mark</td>
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
            <th scope="row">2</th>
            <td>Jacob</td>
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
            <th scope="row">3</th>
            <td>Larry</td>
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
