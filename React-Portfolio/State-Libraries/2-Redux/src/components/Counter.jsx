import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const dispatch = useDispatch();

  const counterState = useSelector((state) => {
    return state.counter;
  });

  function plusButtonHandler() {
    dispatch({ type: "increment" });
  }

  function minusButtonHandler() {
    dispatch({ type: "decrement" });
  }
  return (
    <>
      <div>{counterState}</div>
      <button onClick={plusButtonHandler}>Click and +</button>
      <button onClick={minusButtonHandler}>Click and -</button>
    </>
  );
}

export default Counter;
