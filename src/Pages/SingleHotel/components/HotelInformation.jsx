import React from "react";
import { Row } from "reactstrap";
import {
  ATM,
  Bar,
  FreeBreakfast,
  FreeParking,
  NoSmokingRooms,
  NO_BOOKING,
  Restaurant,
  SOMETHING,
  TEA_COFFEE,
} from "../../../Components/Facilities";

const HotelInformation = () => {
  return (
    <div className="hotelInformation">
      <div className="description">
        <p>
          Located in Addis Ababa, a few steps from Edna Mall Addis Ababa, Daamat
          Hotel provides accommodations with a restaurant, free private parking,
          a bar and a shared lounge. Featuring family rooms, this property also
          provides guests with a terrace. The property has a 24-hour front desk,
          room service and currency exchange for guests.
        </p>
        <p>
          All rooms come with a private bathroom, while selected rooms will
          provide you with a kitchen with a fridge.
        </p>
        <p>
          Continental and buffet breakfast options are available every morning
          at the hotel.
        </p>
        <p>
          Matti Multiplex Theatre is a few steps from Daamat Hotel, while
          Friendship Business Center is a 12-minute walk away.
        </p>
        <p>We speak your language!</p>
      </div>

      <h6>
        <b>Additional Facilities</b>
      </h6>
      <div className="facilitites">
        <Row>
          <FreeBreakfast />
          <FreeParking />
          <Bar />
          <Restaurant /> <NoSmokingRooms />
          <TEA_COFFEE />
          <ATM />
        </Row>
      </div>
      <h6>
        <b>Things you should know</b>
      </h6>
      <NO_BOOKING />
      <SOMETHING />
    </div>
  );
};
export default HotelInformation;
