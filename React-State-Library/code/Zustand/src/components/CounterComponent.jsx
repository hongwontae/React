import { CountStore } from "../store/CountState";

function CounterComponent() {
  const { count, increment, decrement } = CountStore();
  console.log(count);

  return (
    <>
      <h1>Counter Component</h1>
      <div>{count}</div>
      <button onClick={increment}>Up</button>
      <button onClick={decrement}>Down</button>
    </>
  );
}

export default CounterComponent;
