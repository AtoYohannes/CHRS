// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "reservations",
  initialState: {
    currentReservation: {},
    data: {},
    list: [],
    loading: false,
    status: "initial",
    errors: null,
  },
  reducers: {
    reservationsRequested: (reservations, action) => {
      reservations.loading = true;
    },
    reservationsReceived: (reservations, action) => {
      reservations.list = action.payload;
      reservations.loading = false;
    },
    reservationsRequestFailed: (reservations, action) => {
      reservations.loading = false;
      reservations.errors = action.payload;
      reservations.status = "failed";
    },
    reservationUpdated: (reservations, action) => {
      reservations.loading = false;
      reservations.status = "success";
      let index = reservations.list.findIndex(
        (reservation) => reservation.id === action.payload.id
      );
      reservations.list[index] = action.payload;
    },
    reservationAdded: (reservations, action) => {
      reservations.currentReservation = action.payload;
      reservations.list.push(action.payload);
      reservations.loading = false;
      reservations.status = "success";
    },
    reservationsErrorsAndStatusReseted: (reservations, action) => {
      reservations.errors = null;
      reservations.status = "initial";
    },
    reservationRemoved: (reservations, action) => {
      reservations.loading = false;
      reservations.status = "success";
      let index = reservations.list.findIndex(
        (reservation) => reservation.id === action.payload.id
      );
      reservations.list.splice(index, 1);
    },
    dataAdded: (reservations, action) => {
      reservations.data = { ...reservations.data, ...action.payload };
    },
  },
});

const {
  reservationsRequested,
  reservationsReceived,
  reservationsRequestFailed,
  reservationUpdated,
  reservationAdded,
  reservationsErrorsAndStatusReseted,
  reservationRemoved,
  dataAdded,
} = slice.actions;

export default slice.reducer;

const url = "/reservations";

export const loadReservations = () =>
  apiCallBegan({
    url,
    onStart: reservationsRequested.type,
    onSuccess: reservationsReceived.type,
    onError: reservationsRequestFailed.type,
  });

export const addData = (data) => dataAdded(data);

export const updateReservation = (reservation) => {
  const body = { ...reservation };
  console.log("asset category update body", body);
  delete body.id;
  return apiCallBegan({
    url: url + reservation.id,
    method: "put",
    data: body,
    onStart: reservationsRequested.type,
    onSuccess: reservationUpdated.type,
    onError: reservationsRequestFailed.type,
  });
};

export const addReservation = (reservation) => {
  console.log("=============w=======================");
  console.log(reservation);
  console.log("====================================");
  delete reservation.location;
  return apiCallBegan({
    url,
    method: "post",
    data: reservation,
    onStart: reservationsRequested.type,
    onSuccess: reservationAdded.type,
    onError: reservationsRequestFailed.type,
  });
};

export const removeReservation = (reservation) =>
  apiCallBegan({
    url: url + reservation.id,
    method: "delete",
    onStart: reservationsRequested.type,
    onSuccess: reservationRemoved.type,
    onError: reservationsRequestFailed.type,
  });
export const resetErrorsAndStatus = () => reservationsErrorsAndStatusReseted();

export const getReservations = createSelector(
  (state) => state.entities.reservations,
  (reservations) => reservations.list
);

export const getStatus = createSelector(
  (state) => state.entities.reservations,
  (reservations) => reservations.status
);

export const getErrors = createSelector(
  (state) => state.entities.reservations,
  (reservations) => reservations.errors
);

export const getLoading = createSelector(
  (state) => state.entities.reservations,
  (reservations) => reservations.loading
);

export const getData = createSelector(
  (state) => state.entities.reservations,
  (reservations) => reservations.data
);

export const getCurrentReservation = createSelector(
  (state) => state.entities.reservations,
  (reservations) => reservations.currentReservation
);
