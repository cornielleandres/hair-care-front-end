import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// CSS reset
import "./index.css";

// Component
import App from "./App";

// MiddleWare
import thunk from "redux-thunk";
import logger from "redux-logger";

// Reducers
import { UserReducer } from "./store/reducers/UserReducer.js";

let store;
if (process.env.NODE_ENV === "development") {
  store = createStore(UserReducer, applyMiddleware(thunk, logger));
} else {
  store = createStore(UserReducer, applyMiddleware(thunk));
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
