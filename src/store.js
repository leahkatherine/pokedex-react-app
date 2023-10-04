import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import comments from "./components/comments/commentsReducer";
import { loadState, saveState } from "./localStorage/localStorage";

import "./styles.css";

const persistedState = loadState();

const store = createStore(comments, persistedState);
console.log(store.getState());

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(<App store={store} />, document.querySelector("#app"));
