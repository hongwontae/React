import { createStore } from "redux";

const data = { counter: 0, toggle: true };

function counterReducer(state = data, actions) {
  if (actions.type === "ADD") {
    return {
      counter: state.counter + 1,
      toggle: state.toggle,
    };
  } else if (actions.type === "MINUS") {
    return {
      counter: state.counter - 1,
      toggle: state.toggle,
    };
  } else if (actions.type === "INCREMENT5") {
    return {
      counter: state.counter + actions.amount,
      toggle: state.toggle,
    };
  } else if (actions.type === "toggle") {
    return {
      toggle: !state.toggle,
      counter: state.counter,
    };
  } else {
    return state;
  }
}

const store = createStore(counterReducer);

export default store;
