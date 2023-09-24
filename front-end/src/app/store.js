import { configureStore } from "@reduxjs/toolkit";
import completeSlice from "./completeSlice";

export const store = configureStore({
  reducer: {
    'complete' : completeSlice
  },
});

export default store
