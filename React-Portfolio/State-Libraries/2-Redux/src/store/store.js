import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterSlice = {
  counter: 0,
  toggle: true,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState: initialCounterSlice,
  reducers: {
    increment(state) {
       state.counter++;
    },
    decrement(state) {
       state.counter--;
    },
    increase(state, action) {
       state.counter + action.payload;
    },
    toggle(state) {
       state.toggle = !state.toggle;
    },
  },
});

const initialAuthState = {
  isAuthentication: false,
};

const AuthSlcie = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    isLogin(state) {
       (state.isAuthentication = true);
    },
    isLogout(state) {
       (state.isAuthentication = false);
    },
  },
});

const store = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
    auth: AuthSlcie.reducer,
  },
});

export const counterAction = CounterSlice.actions;
export const authAction = AuthSlcie.actions;


export default store;
