import { useDispatch } from "react-redux";
import { counterSliceAction } from "../redux-store/Slices/CounterSlice";

function Buttons() {
  const dispatch = useDispatch();

  function plusHandler() {
    dispatch(counterSliceAction.increment());
  }

  function minusHandler() {
    dispatch(counterSliceAction.decrement());
  }

  function toggleHandler() {
    dispatch(counterSliceAction.toggle());
  }

  return (
    <>
      <button onClick={plusHandler}>Plus</button>
      <button onClick={toggleHandler}>Toggle</button>
      <button onClick={minusHandler}>Minus</button>
    </>
  );
}

export default Buttons;
