import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const userStorage = JSON.parse(localStorage.getItem("user"));
const tokenStorage = JSON.parse(localStorage.getItem("token"));

const initialState = {
  user: userStorage || null,
  token: tokenStorage || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  ruducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfill, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
  },
});
