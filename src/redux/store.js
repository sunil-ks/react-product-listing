import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "./modules/shoppingSlice";

// configuring the store with our defined reducer to be used in the entire application
const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
  },
});

export default store;
