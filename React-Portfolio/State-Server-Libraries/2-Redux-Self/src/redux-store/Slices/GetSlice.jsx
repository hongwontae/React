/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

export const getSlice = createSlice({
  name: "get",
  initialState: {
    items: [],
    comState: {},
  },
  reducers: {
    showReducer(state, action) {
      const responseState = action.payload;
      state.comState = responseState;
    },
    getRender(state, action) {
      const resData = action.payload;
      state.items = resData;
    },
  },
});

export const getActionCreator = () => {
  return async (dispatch) => {
    await dispatch(
      getSliceAction.showReducer({
        status: "pending",
        message: "Pending 중입니다.",
        title: "Suspense.....",
      })
    );

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      const resData = await response.json();

      if (!response.ok) {
        dispatch(
          getSliceAction.showReducer({
            status: "fail",
            message: "Fail",
            title: "Wow! Fail this page",
          })
        );
      }
      dispatch(
        getSliceAction.showReducer({
          status: "success",
          message: "Success",
          title: "Wow! Success this page",
        })
      );

      dispatch(getSliceAction.getRender(resData));
    } catch (error) {
      throw new Error("Fail!");
    }
  };
};

export const getSliceAction = getSlice.actions;
