import { useDispatch, useSelector } from "react-redux";

import { counterSliceAction } from "../store/CounterSlice";


function CounterPage() {


  const dispatch = useDispatch();
  const counterState = useSelector((state) => state.counterReducer.counter);
  const toggleState = useSelector((state) => state.counterReducer.toggle);

  function plusHandler() {
    dispatch(counterSliceAction.plusReducer());
  }

  function minusHandler() {
    dispatch(counterSliceAction.minusReducer());
  }

  function toggleHandler() {
    dispatch(counterSliceAction.toggleReducer());
  }

  return (
    <>
      {toggleState ? (
        <>
          <h1>Counter here</h1>
          <div>{counterState}</div>
        </>
      ) : undefined}
      <div style={{ width: "100%" }}>
        <button onClick={plusHandler}>+</button>
        <button onClick={minusHandler}>-</button>
        <button onClick={toggleHandler}>Toggle</button>
      </div>
    </>
  );
}

export default CounterPage;
