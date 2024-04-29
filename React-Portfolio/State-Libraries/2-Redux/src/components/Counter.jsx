import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../store/store";

function Counter() {
  const dispatch = useDispatch();

  const counterState = useSelector((state) => {
    return state.counter.counter;
  });

  const toggleState = useSelector((state) => {
    return state.counter.toggle;
  });
  console.log(counterAction)

  function plusButtonHandler() {
    dispatch(counterAction.increment());
  }

  function minusButtonHandler() {
    dispatch(counterAction.decrement());
  }

  function toggleOn(){
    dispatch(counterAction.toggle());
  }
  return (
    <>
      {toggleState ? <div>{counterState}</div> : undefined}
      <button onClick={plusButtonHandler}>Click and +</button>
      <button onClick={minusButtonHandler}>Click and -</button>
      <button onClick={toggleOn}>Toggle</button>
    </>
  );
}

export default Counter;
