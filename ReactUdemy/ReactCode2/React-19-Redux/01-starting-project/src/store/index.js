import { createSlice, configureStore } from "@reduxjs/toolkit";

const data = { counter: 0, toggle: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: data,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decreament(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.toggle = !state.toggle;
    },
  },
});

// function counterReducer(state = data, actions) {
//   if (actions.type === "ADD") {
//     return {
//       counter: state.counter + 1,
//       toggle: state.toggle,
//     };
//   } else if (actions.type === "MINUS") {
//     return {
//       counter: state.counter - 1,
//       toggle: state.toggle,
//     };
//   } else if (actions.type === "INCREMENT5") {
//     return {
//       counter: state.counter + actions.amount,
//       toggle: state.toggle,
//     };
//   } else if (actions.type === "toggle") {
//     return {
//       toggle: !state.toggle,
//       counter: state.counter,
//     };
//   } else {
//     return state;
//   }
// }

const store = configureStore({
    reducer : counterSlice.reducer
})

export const counterActions = counterSlice.actions;

export default store;
