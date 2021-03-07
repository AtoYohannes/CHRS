// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "bedTypes",
  initialState: {
    list: [],
    loading: false,
    status: "initial",
    errors: null,
  },
  reducers: {
    bedTypesRequested: (bedTypes, action) => {
      bedTypes.loading = true;
    },
    bedTypesReceived: (bedTypes, action) => {
      bedTypes.list = action.payload;
      bedTypes.loading = false;
    },
    bedTypesRequestFailed: (bedTypes, action) => {
      bedTypes.loading = false;
      bedTypes.errors = action.payload;
      bedTypes.status = "failed";
    },
    bedTypeUpdated: (bedTypes, action) => {
      bedTypes.loading = false;
      bedTypes.status = "success";
      let index = bedTypes.list.findIndex(
        (bedType) => bedType.id === action.payload.id
      );
      bedTypes.list[index] = action.payload;
    },
    bedTypeAdded: (bedTypes, action) => {
      bedTypes.list.push(action.payload);
      bedTypes.loading = false;
      bedTypes.status = "success";
    },
    bedTypesErrorsAndStatusReseted: (bedTypes, action) => {
      bedTypes.errors = null;
      bedTypes.status = "initial";
    },
    bedTypeRemoved: (bedTypes, action) => {
      bedTypes.loading = false;
      bedTypes.status = "success";
      let index = bedTypes.list.findIndex(
        (bedType) => bedType.id === action.payload.id
      );
      bedTypes.list.splice(index, 1);
    },
  },
});

const {
  bedTypesRequested,
  bedTypesReceived,
  bedTypesRequestFailed,
  bedTypeUpdated,
  bedTypeAdded,
  bedTypesErrorsAndStatusReseted,
  bedTypeRemoved,
} = slice.actions;

export default slice.reducer;

const url = "/bedtypes";

export const loadbedTypes = () => {
  return apiCallBegan({
    url,
    onStart: bedTypesRequested.type,
    onSuccess: bedTypesReceived.type,
    onError: bedTypesRequestFailed.type,
  });
};

export const updateBedType = (bedType) => {
  const body = { ...bedType };
  console.log("asset category update body", body);
  delete body.id;
  return apiCallBegan({
    url: url + bedType.id,
    method: "put",
    data: body,
    onStart: bedTypesRequested.type,
    onSuccess: bedTypeUpdated.type,
    onError: bedTypesRequestFailed.type,
  });
};

export const addBedType = (bedType) =>
  apiCallBegan({
    url,
    method: "post",
    data: bedType,
    onStart: bedTypesRequested.type,
    onSuccess: bedTypeAdded.type,
    onError: bedTypesRequestFailed.type,
  });

export const removeBedType = (bedType) =>
  apiCallBegan({
    url: url + bedType.id,
    method: "delete",
    onStart: bedTypesRequested.type,
    onSuccess: bedTypeRemoved.type,
    onError: bedTypesRequestFailed.type,
  });
export const resetErrorsAndStatus = () => bedTypesErrorsAndStatusReseted();

export const getBedTypes = createSelector(
  (state) => state.entities.bedTypes,
  (bedTypes) => bedTypes.list
);

export const getStatus = createSelector(
  (state) => state.entities.bedTypes,
  (bedTypes) => bedTypes.status
);

export const getErrors = createSelector(
  (state) => state.entities.bedTypes,
  (bedTypes) => bedTypes.errors
);

export const getLoading = createSelector(
  (state) => state.entities.bedTypes,
  (bedTypes) => bedTypes.loading
);
