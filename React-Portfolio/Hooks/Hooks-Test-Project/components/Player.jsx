import { useRef } from "react";
import { useState } from "react";
import { useReducer } from "react";

function reducerFunction(state, action) {
  if (action.type === "save") {
    let value = action.value;

    return value;
  }
}

export default function Player() {
  const [initialState, dispatch] = useReducer(reducerFunction, "");

  const [bol, setBol] = useState(false);

  const inputRef = useRef();

  function saveHandler() {
    dispatch({ type: "save", value: inputRef.current.value});
  }

  function saveTitleHandler() {
    setBol(!bol);
  }

  return (
    <section id="player">
      <h2>Welcome {bol ? initialState : "Unkown"}</h2>
      <p>
        <input
          ref={inputRef}
          type="text"
          onChange={saveHandler}
          value={initialState}
        />
        <button onClick={saveTitleHandler}>Set Name</button>
      </p>
    </section>
  );
}
