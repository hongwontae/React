import { useState, useReducer } from "react";
import "./App.css";

function reducerFunc(state, action){
  if(action.type === 'increment'){
    return {
      ...state,
      counter : state.counter+1
    }
  }
  if(action.type === 'decrement'){
    return {
      ...state,
      counter : state.counter-1
    }
  }
  if(action.type === 'toggle'){
    return {
      ...state,
      showCounter : !state.showCounter
    }
  }
}

function App() {
  const [count, setCount] = useState(0);

  const [initialState, dispatch] = useReducer(reducerFunc,{
    counter : 0,
    showCounter : true
  });

  function plusTwoHandler(){
    dispatch({type : 'increment'});
  }

  function minusTwoHandler(){
    dispatch({type : 'decrement'});
  }

  function toggleHandler(){
    dispatch({type : 'toggle'});
  }

  function plusButton(){
    setCount((prevState)=>{
      return prevState+1;
    })
  }

  function minusButton(){
    setCount((prevState)=>{
      return prevState-1;
    })
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={plusButton}>++++</button>
      <button onClick={minusButton}>----</button>
      <h1>Hello world</h1>
      {initialState.showCounter ? <div>{initialState.counter}</div> : undefined}
      <button onClick={plusTwoHandler}>+++</button>
      <button onClick={minusTwoHandler}>---</button>
      <button onClick={toggleHandler}>Toggle</button>
    </>
  );
}

export default App;
