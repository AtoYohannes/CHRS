import React from "react";
import { MdHotel } from "react-icons/md";

const Divider = ({ title }) => {
  return (
    <div className="divider bg-background mt-5 mb-5">
      <MdHotel />

      <div className="ml-1 mr-1">
        <h6>
          <b>{title}</b>
        </h6>
      </div>
      <MdHotel />
    </div>
  );
};

export default Divider;
