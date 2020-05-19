// external modules
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import reduxPromise from "redux-promise";

// internal modules
import App from "./components/app";
import "../assets/stylesheets/application.scss";
import selectedChannelReducer from "./reducers/selected_channel_reducer";
import messagesReducer from "./reducers/messages_reducer";
// State and reducers

const identityReducer = (state = null) => state;
const initialState = {
  messages: [],
  channels: ["general", "react", "paris"],
  currentUser:
    prompt("What is your username?") ||
    `anonymous${Math.floor(10 + Math.random() * 90)}`,
  selectedChannel: "general",
};

const reducers = combineReducers({
  messages: messagesReducer,
  currentUser: identityReducer,
  channels: identityReducer,
  selectedChannel: selectedChannelReducer,
});
// Middlewares
const middlewares = applyMiddleware(reduxPromise, logger);
// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
