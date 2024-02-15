import { configureStore } from "@reduxjs/toolkit";

import { userSlice } from "./Slices/UserSlice";

export const reduxStore = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
