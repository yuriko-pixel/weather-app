import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import fetchSlice from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: fetchSlice.reducer
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
