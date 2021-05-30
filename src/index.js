import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import rootReducer from "./redux/root-reducer";
import createSagaMiddleware from "redux-saga";
import UserSaga from "./sagas/user";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

const sagas = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagas));

sagas.run(UserSaga);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      <Toaster />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
