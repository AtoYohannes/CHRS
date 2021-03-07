// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "hotels",
  initialState: {
    list: [],
    loading: false,
    status: "initial",
    errors: null,
  },
  reducers: {
    hotelsRequested: (hotels, action) => {
      hotels.loading = true;
    },
    hotelsReceived: (hotels, action) => {
      hotels.list = action.payload;
      hotels.loading = false;
    },
    hotelsRequestFailed: (hotels, action) => {
      hotels.loading = false;
      hotels.errors = action.payload;
      hotels.status = "failed";
    },
    hotelUpdated: (hotels, action) => {
      hotels.loading = false;
      hotels.status = "success";
      let index = hotels.list.findIndex(
        (hotel) => hotel.id === action.payload.id
      );
      hotels.list[index] = action.payload;
    },
    hotelAdded: (hotels, action) => {
      hotels.list.push(action.payload);
      hotels.loading = false;
      hotels.status = "success";
    },
    hotelsErrorsAndStatusReseted: (hotels, action) => {
      hotels.errors = null;
      hotels.status = "initial";
    },
    hotelRemoved: (hotels, action) => {
      hotels.loading = false;
      hotels.status = "success";
      let index = hotels.list.findIndex(
        (hotel) => hotel.id === action.payload.id
      );
      hotels.list.splice(index, 1);
    },
  },
});

const {
  hotelsRequested,
  hotelsReceived,
  hotelsRequestFailed,
  hotelUpdated,
  hotelAdded,
  hotelsErrorsAndStatusReseted,
  hotelRemoved,
} = slice.actions;

export default slice.reducer;

const url = "/hotels";

export const loadHotels = () =>
  apiCallBegan({
    url,
    onStart: hotelsRequested.type,
    onSuccess: hotelsReceived.type,
    onError: hotelsRequestFailed.type,
  });

export const updateHotel = (hotel) => {
  const body = { ...hotel };
  console.log("asset category update body", body);
  delete body.id;
  return apiCallBegan({
    url: url + hotel.id,
    method: "put",
    data: body,
    onStart: hotelsRequested.type,
    onSuccess: hotelUpdated.type,
    onError: hotelsRequestFailed.type,
  });
};

export const addHotel = (hotel) =>
  apiCallBegan({
    url,
    method: "post",
    data: hotel,
    onStart: hotelsRequested.type,
    onSuccess: hotelAdded.type,
    onError: hotelsRequestFailed.type,
  });

export const removeHotel = (hotel) =>
  apiCallBegan({
    url: url + hotel.id,
    method: "delete",
    onStart: hotelsRequested.type,
    onSuccess: hotelRemoved.type,
    onError: hotelsRequestFailed.type,
  });
export const resetErrorsAndStatus = () => hotelsErrorsAndStatusReseted();

export const getHotels = createSelector(
  (state) => state.entities.hotels,
  (hotels) => hotels.list
);

export const getStatus = createSelector(
  (state) => state.entities.hotels,
  (hotels) => hotels.status
);

export const getErrors = createSelector(
  (state) => state.entities.hotels,
  (hotels) => hotels.errors
);

export const getLoading = createSelector(
  (state) => state.entities.hotels,
  (hotels) => hotels.loading
);
