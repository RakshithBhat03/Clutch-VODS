import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginValues, thunkAPI) => {
    try {
      const response = await axios.post("api/auth/login", loginValues);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const SignupUser = createAsyncThunk(
  "auth/SignupUser",
  async (signupValues, thunkAPI) => {
    try {
      const response = await axios.post("api/auth/signup", signupValues);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
