import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./init";

export const store = configureStore({
  reducer: {
    count: counterSlice.reducer,
  },
});
