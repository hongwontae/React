import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from './store/index'

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// 데이터에 대한 구독을 설정할 수 있게 되고 액션을 발송할 수 있게 되는 초기 작업
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
