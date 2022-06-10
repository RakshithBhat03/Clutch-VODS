import { createSlice } from "@reduxjs/toolkit";
const initialState = true;
const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState,
  reducers: {
    closeMenu: (state) => (state = true),
    toggleMenu: (state) => (state = !state),
  },
});
export const { closeMenu, toggleMenu } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;
