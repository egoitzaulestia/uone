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

export const register = createAsyncThunk("auth/register", async (user) => {
  try {
    console.log("from store", user);
    return await authService.register(user);
  } catch (err) {
    console.error(err);
  }
});

export const login = createAsyncThunk("auth/login", async (user) => {
  try {
    return await authService.login(user);
  } catch (err) {
    console.error(err);
  }
});
