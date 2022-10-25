import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import shoppingReducer from "./redux/shoppingSlice";

// configuring the store to be used in the entire application
const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* Wrap the App component with the Provider and pass the store so that our
    react application will have access to all the global states which we have
    defined */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
