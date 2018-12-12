import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// CSS reset
import "./index.css";

// Component
import App from "./App";
import LogInForm from "./components/Forms/LogInForm";
import Auth from "./components/Auth/Auth";

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

const AuthComponent = Auth(App)(LogInForm);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={AuthComponent} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
