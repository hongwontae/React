import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store";
import storeIndex from "./test/store/storeIndex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={storeIndex}>
    <App />
  </Provider>
);
