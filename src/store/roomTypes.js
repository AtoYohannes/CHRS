// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "roomTypes",
  initialState: {
    list: [],
    loading: false,
    status: "initial",
    errors: null,
  },
  reducers: {
    roomTypesRequested: (roomTypes, action) => {
      roomTypes.loading = true;
    },
    roomTypesReceived: (roomTypes, action) => {
      roomTypes.list = action.payload;
      roomTypes.loading = false;
    },
    roomTypesRequestFailed: (roomTypes, action) => {
      roomTypes.loading = false;
      roomTypes.errors = action.payload;
      roomTypes.status = "failed";
    },
    roomTypeUpdated: (roomTypes, action) => {
      roomTypes.loading = false;
      roomTypes.status = "success";
      let index = roomTypes.list.findIndex(
        (roomType) => roomType.id === action.payload.id
      );
      roomTypes.list[index] = action.payload;
    },
    roomTypeAdded: (roomTypes, action) => {
      roomTypes.list.push(action.payload);
      roomTypes.loading = false;
      roomTypes.status = "success";
    },
    roomTypesErrorsAndStatusReseted: (roomTypes, action) => {
      roomTypes.errors = null;
      roomTypes.status = "initial";
    },
    roomTypeRemoved: (roomTypes, action) => {
      roomTypes.loading = false;
      roomTypes.status = "success";
      let index = roomTypes.list.findIndex(
        (roomType) => roomType.id === action.payload.id
      );
      roomTypes.list.splice(index, 1);
    },
  },
});

const {
  roomTypesRequested,
  roomTypesReceived,
  roomTypesRequestFailed,
  roomTypeUpdated,
  roomTypeAdded,
  roomTypesErrorsAndStatusReseted,
  roomTypeRemoved,
} = slice.actions;

export default slice.reducer;

const url = "/roomtypes";

export const loadroomTypes = () =>
  apiCallBegan({
    url,
    onStart: roomTypesRequested.type,
    onSuccess: roomTypesReceived.type,
    onError: roomTypesRequestFailed.type,
  });

export const updateRoomType = (roomType) => {
  const body = { ...roomType };
  console.log("asset category update body", body);
  delete body.id;
  return apiCallBegan({
    url: url + roomType.id,
    method: "put",
    data: body,
    onStart: roomTypesRequested.type,
    onSuccess: roomTypeUpdated.type,
    onError: roomTypesRequestFailed.type,
  });
};

export const addRoomType = (roomType) =>
  apiCallBegan({
    url,
    method: "post",
    data: roomType,
    onStart: roomTypesRequested.type,
    onSuccess: roomTypeAdded.type,
    onError: roomTypesRequestFailed.type,
  });

export const removeRoomType = (roomType) =>
  apiCallBegan({
    url: url + roomType.id,
    method: "delete",
    onStart: roomTypesRequested.type,
    onSuccess: roomTypeRemoved.type,
    onError: roomTypesRequestFailed.type,
  });
export const resetErrorsAndStatus = () => roomTypesErrorsAndStatusReseted();

export const getRoomTypes = createSelector(
  (state) => state.entities.roomTypes,
  (roomTypes) => roomTypes.list
);

export const getStatus = createSelector(
  (state) => state.entities.roomTypes,
  (roomTypes) => roomTypes.status
);

export const getErrors = createSelector(
  (state) => state.entities.roomTypes,
  (roomTypes) => roomTypes.errors
);

export const getLoading = createSelector(
  (state) => state.entities.roomTypes,
  (roomTypes) => roomTypes.loading
);
