import { createSlice } from "@reduxjs/toolkit";
import { loginUser, SignupUser } from "../actions/authActions";
import { ShowToast } from "../components";
import { getLocalStorage, removeLocalStorage, setLocalStorage } from "../utils";
const initialState = {
  userToken: getLocalStorage("userToken"),
  userData: getLocalStorage("userDate") ?? [],
  status: false,
  loading: false,
  error: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadAuth: (state) => {
      if (getLocalStorage("userToken"))
        return (state = {
          ...state,
          userToken: getLocalStorage("userToken"),
          userData: getLocalStorage("userData"),
        });
      else return initialState;
    },
    logoutUser: (state) => {
      removeLocalStorage("userToken");
      removeLocalStorage("userData");
      ShowToast({
        type: "success",
        message: "You have logged out!",
      });
      return (state = {
        ...state,
        userToken: null,
        userData: [],
        status: false,
      });
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.status = false;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.userToken = action.payload.encodedToken;
      state.userData = action.payload.foundUser;
      state.loading = false;
      state.error = false;
      state.status = true;
      ShowToast({
        type: "success",
        message: "Login successful",
      });
      setLocalStorage("userToken", action.payload.encodedToken);
      setLocalStorage("userData", action.payload.foundUser);
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.response.status;
      state.status = false;
    },
    [SignupUser.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.status = false;
    },
    [SignupUser.fulfilled]: (state, action) => {
      state.userToken = action.payload.encodedToken;
      state.userData = action.payload.createdUser;
      delete state.userData["password"];
      state.loading = false;
      state.error = false;
      state.status = true;
      ShowToast({
        type: "success",
        message: "Signup successful",
      });
      setLocalStorage("userToken", action.payload.encodedToken);
      setLocalStorage("userData", state.userData);
    },
    [SignupUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.response.status;
      state.status = false;
    },
  },
});
export const { loadAuth, logoutUser } = authSlice.actions;
export default authSlice.reducer;
