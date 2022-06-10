import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../utils";
const initialState = "light";
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    loadTheme: (state) => {
      return (state = getLocalStorage("theme"));
    },
    toggleTheme: (state) => {
      if (state === "dark") {
        setLocalStorage("theme", "light");
        return (state = "light");
      } else {
        setLocalStorage("theme", "dark");
        return (state = "dark");
      }
    },
  },
});
export const { loadTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
