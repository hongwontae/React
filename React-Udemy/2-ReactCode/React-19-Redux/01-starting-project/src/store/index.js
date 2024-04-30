import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterSliceData = { counter: 0, toggle: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterSliceData,
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

const initialAuthState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
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
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
