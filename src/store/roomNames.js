// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "roomNames",
  initialState: {
    list: [],
    loading: false,
    status: "initial",
    errors: null,
  },
  reducers: {
    roomNamesRequested: (roomNames, action) => {
      roomNames.loading = true;
    },
    roomNamesReceived: (roomNames, action) => {
      roomNames.list = action.payload;
      roomNames.loading = false;
    },
    roomNamesRequestFailed: (roomNames, action) => {
      roomNames.loading = false;
      roomNames.errors = action.payload;
      roomNames.status = "failed";
    },
    roomNameUpdated: (roomNames, action) => {
      roomNames.loading = false;
      roomNames.status = "success";
      let index = roomNames.list.findIndex(
        (roomName) => roomName.id === action.payload.id
      );
      roomNames.list[index] = action.payload;
    },
    roomNameAdded: (roomNames, action) => {
      roomNames.list.push(action.payload);
      roomNames.loading = false;
      roomNames.status = "success";
    },
    roomNamesErrorsAndStatusReseted: (roomNames, action) => {
      roomNames.errors = null;
      roomNames.status = "initial";
    },
    roomNameRemoved: (roomNames, action) => {
      roomNames.loading = false;
      roomNames.status = "success";
      let index = roomNames.list.findIndex(
        (roomName) => roomName.id === action.payload.id
      );
      roomNames.list.splice(index, 1);
    },
  },
});

const {
  roomNamesRequested,
  roomNamesReceived,
  roomNamesRequestFailed,
  roomNameUpdated,
  roomNameAdded,
  roomNamesErrorsAndStatusReseted,
  roomNameRemoved,
} = slice.actions;

export default slice.reducer;

const url = "/roomnames";

export const loadroomNames = () =>
  apiCallBegan({
    url,
    onStart: roomNamesRequested.type,
    onSuccess: roomNamesReceived.type,
    onError: roomNamesRequestFailed.type,
  });

export const updateRoomName = (roomName) => {
  const body = { ...roomName };
  console.log("asset category update body", body);
  delete body.id;
  return apiCallBegan({
    url: url + roomName.id,
    method: "put",
    data: body,
    onStart: roomNamesRequested.type,
    onSuccess: roomNameUpdated.type,
    onError: roomNamesRequestFailed.type,
  });
};

export const addRoomName = (roomName) =>
  apiCallBegan({
    url,
    method: "post",
    data: roomName,
    onStart: roomNamesRequested.type,
    onSuccess: roomNameAdded.type,
    onError: roomNamesRequestFailed.type,
  });

export const removeRoomName = (roomName) =>
  apiCallBegan({
    url: url + roomName.id,
    method: "delete",
    onStart: roomNamesRequested.type,
    onSuccess: roomNameRemoved.type,
    onError: roomNamesRequestFailed.type,
  });
export const resetErrorsAndStatus = () => roomNamesErrorsAndStatusReseted();

export const getRoomNames = createSelector(
  (state) => state.entities.roomNames,
  (roomNames) => roomNames.list
);

export const getStatus = createSelector(
  (state) => state.entities.roomNames,
  (roomNames) => roomNames.status
);

export const getErrors = createSelector(
  (state) => state.entities.roomNames,
  (roomNames) => roomNames.errors
);

export const getLoading = createSelector(
  (state) => state.entities.roomNames,
  (roomNames) => roomNames.loading
);
