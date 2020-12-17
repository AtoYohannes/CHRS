import { combineReducers } from "redux";
import bedTypesReducer from "./bedTypes";
import roomTypesReducer from "./roomTypes";
import roomNamesReducer from "./roomNames";
import facilitysReducer from "./facilities";
import hotelsReducer from "./hotels";
import reservationsReducer from "./reservations";

export default combineReducers({
  bedTypes: bedTypesReducer,
  roomTypes: roomTypesReducer,
  roomNames: roomNamesReducer,
  facilitys: facilitysReducer,
  hotels: hotelsReducer,
  reservations: reservationsReducer,
});
