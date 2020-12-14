import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
import { setUser, getUser, getToken, setToken } from "../services/authService";

const slice = createSlice({
  name: "users",
  initialState: {
    currentUser: getUser(),
    usersToken: getToken(),
    loading: false,
    status: "initial",
    errors: null,
  },
  reducers: {
    userRequested: (users, action) => {
      users.loading = true;
    },
    userReceived: (users, action) => {
      const { user, token } = action.payload;
      setToken(token);
      setUser(user);
      users.currentUser = user;
      users.usersToken = token;
      users.loading = false;
      users.status = "success";
      users.errors = null;
    },
    userRequestFailed: (users, action) => {
      users.loading = false;
      users.status = "failed";
      users.errors = action.payload;
    },
    errorReseted: (users, actions) => {
      users.errors = null;
    },
  },
});

const {
  userRequested,
  userReceived,
  userRequestFailed,
  errorReseted,
} = slice.actions;
export default slice.reducer;

export const registerUser = (user) =>
  apiCallBegan({
    url: "/users",
    method: "post",
    data: user,
    onStart: userRequested.type,
    onSuccess: userReceived.type,
    onError: userRequestFailed.type,
  });

export const loginUser = (user) =>
  apiCallBegan({
    url: "/auth",
    method: "post",
    data: user,
    onStart: userRequested.type,
    onSuccess: userReceived.type,
    onError: userRequestFailed.type,
  });
export const resetErrors = () => ({
  type: errorReseted.type,
});
// Selector
export const getLoading = createSelector(
  (state) => state.users.loading,
  (loading) => loading
);

export const getStatus = createSelector(
  (state) => state.users.status,
  (status) => status
);

//Selectors
export const getCurrentUser = createSelector(
  (state) => state.users,
  (users) => users.currentUser
);
