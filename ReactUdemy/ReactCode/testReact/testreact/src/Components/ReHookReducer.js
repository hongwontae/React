import React, { useEffect, useReducer, useState } from "react";

const reducer = (state, action) => {
  if ((action.type = "riverpool")) {
    return { value: "goodBoy", isValid: true };
  }
};

const ReHookReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    value: 1000,
    isValid: false,
  });

  const buttonClickHandler = () => {
    dispatch({ type: "riverpool" });
  };

  return (
    <div>
      <div>{state.value}</div>
      <button onClick={buttonClickHandler}>Button</button>
    </div>
  );
};

export default ReHookReducer;
