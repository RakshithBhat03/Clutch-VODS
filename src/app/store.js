import { configureStore } from "@reduxjs/toolkit";
import mobileMenuReducer from "../features/mobileMenu";
import themeReducer from "../features/themeSlice";
import authReducer from "../features/authSlice";
import videoReducer from "../features/videoSlice";
import modalReducer from "../features/modalSlice";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    mobileMenu: mobileMenuReducer,
    auth: authReducer,
    video: videoReducer,
    modal: modalReducer,
  },
});
