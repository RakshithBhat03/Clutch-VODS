import { createSlice } from "@reduxjs/toolkit";
const initialState = false;
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      return (state = true);
    },
    closeModal: (state) => {
      return (state = false);
    },
  },
});
export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
