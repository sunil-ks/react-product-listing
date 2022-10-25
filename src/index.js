import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.Fragment>
    {/* Wrap the App component with the Provider and pass the store so that our
    react application will have access to all the global states which we have
    defined */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>
);
