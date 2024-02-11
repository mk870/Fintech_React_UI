import App from "App";
import { reduxStore } from "Redux/Config";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
