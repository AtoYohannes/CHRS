// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "facilitys",
  initialState: {
    list: [],
    loading: false,
    status: "initial",
    errors: null,
  },
  reducers: {
    facilitysRequested: (facilitys, action) => {
      facilitys.loading = true;
    },
    facilitysReceived: (facilitys, action) => {
      facilitys.list = action.payload;
      facilitys.loading = false;
    },
    facilitysRequestFailed: (facilitys, action) => {
      facilitys.loading = false;
      facilitys.errors = action.payload;
      facilitys.status = "failed";
    },
    facilityUpdated: (facilitys, action) => {
      facilitys.loading = false;
      facilitys.status = "success";
      let index = facilitys.list.findIndex(
        (facility) => facility.id === action.payload.id
      );
      facilitys.list[index] = action.payload;
    },
    facilityAdded: (facilitys, action) => {
      facilitys.list.push(action.payload);
      facilitys.loading = false;
      facilitys.status = "success";
    },
    facilitysErrorsAndStatusReseted: (facilitys, action) => {
      facilitys.errors = null;
      facilitys.status = "initial";
    },
    facilityRemoved: (facilitys, action) => {
      facilitys.loading = false;
      facilitys.status = "success";
      let index = facilitys.list.findIndex(
        (facility) => facility.id === action.payload.id
      );
      facilitys.list.splice(index, 1);
    },
  },
});

const {
  facilitysRequested,
  facilitysReceived,
  facilitysRequestFailed,
  facilityUpdated,
  facilityAdded,
  facilitysErrorsAndStatusReseted,
  facilityRemoved,
} = slice.actions;

export default slice.reducer;

const url = "/facilities";

export const loadfacilitys = () =>
  apiCallBegan({
    url,
    onStart: facilitysRequested.type,
    onSuccess: facilitysReceived.type,
    onError: facilitysRequestFailed.type,
  });

export const updateFacility = (facility) => {
  const body = { ...facility };
  console.log("asset category update body", body);
  delete body.id;
  return apiCallBegan({
    url: url + facility.id,
    method: "put",
    data: body,
    onStart: facilitysRequested.type,
    onSuccess: facilityUpdated.type,
    onError: facilitysRequestFailed.type,
  });
};

export const addFacility = (facility) =>
  apiCallBegan({
    url,
    method: "post",
    data: facility,
    onStart: facilitysRequested.type,
    onSuccess: facilityAdded.type,
    onError: facilitysRequestFailed.type,
  });

export const removeFacility = (facility) =>
  apiCallBegan({
    url: url + facility.id,
    method: "delete",
    onStart: facilitysRequested.type,
    onSuccess: facilityRemoved.type,
    onError: facilitysRequestFailed.type,
  });
export const resetErrorsAndStatus = () => facilitysErrorsAndStatusReseted();

export const getFacilitys = createSelector(
  (state) => state.entities.facilitys,
  (facilitys) => facilitys.list
);

export const getStatus = createSelector(
  (state) => state.entities.facilitys,
  (facilitys) => facilitys.status
);

export const getErrors = createSelector(
  (state) => state.entities.facilitys,
  (facilitys) => facilitys.errors
);

export const getLoading = createSelector(
  (state) => state.entities.facilitys,
  (facilitys) => facilitys.loading
);
