import {useSelector, useDispatch} from 'react-redux'

import {counterActions} from '../store/index.js'
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.toggle)

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = ()=>{
    dispatch(counterActions.increment())
  }

  const decrementHandler = ()=>{
    dispatch(counterActions.decreament())
  }

  const incresmentHandler = ()=>{
    dispatch(counterActions.increase(10))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show&&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incresmentHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
