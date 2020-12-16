import { combineReducers } from "redux";
import bedTypesReducer from "./bedTypes";
import roomTypesReducer from "./roomTypes";
import roomNamesReducer from "./roomNames";
import facilitysReducer from "./facilities";

export default combineReducers({
  bedTypes: bedTypesReducer,
  roomTypes: roomTypesReducer,
  roomNames: roomNamesReducer,
  facilitys: facilitysReducer,
});
