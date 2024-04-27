import classes from "./Counter.module.css";
import {counterActions} from '../store/index'
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch(); // dispatch는 action을 보낸다.

  const counter = useSelector((state) => {
    return state.counter;
  });

  const toggle = useSelector((state) => {
    return state.showCounter;
  });

  function incrementHandler() {
    dispatch(counterActions.increment());
  }

  function decrementHandler() {
    dispatch(counterActions.decrement());
  }
  function increaseAmount() {
    dispatch(counterActions.increase(10)); // {type : SOME_UNIQUE_IDENTIFIER, payload : 10};
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle ? <div className={classes.value}>{counter}</div> : undefined}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseAmount}>10+</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
