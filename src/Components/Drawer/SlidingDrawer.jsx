import React from "react";
import Rating from "../../Pages/Rating";

const SlidingDrawer = ({ type, show }) => {
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <div className={drawerClasses}>
      <Rating />
    </div>
  );
};

export default SlidingDrawer;
