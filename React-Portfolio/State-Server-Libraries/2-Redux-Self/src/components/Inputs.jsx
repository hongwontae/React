import { useRef } from "react";

import {counterSliceAction} from '../redux-store/Slices/CounterSlice';
import {useDispatch} from 'react-redux'

function Inputs() {

  const dispatch = useDispatch();


  const plusRef = useRef();
  const minusRef = useRef();

  function addInputHandler(){
    dispatch(counterSliceAction.inputIncrement(+plusRef.current.value))
    plusRef.current.value = null
  }

  function minusInputHandler(){
    dispatch(counterSliceAction.inputDecrement(+minusRef.current.value))
    minusRef.current.value = null
  }

 


  return (
    <>
      <main style={{ marginTop: 30 }}>
        <div>
          <label htmlFor="plus">Plus Input</label>
          <input type="number" id="plus" name="plus" ref={plusRef}></input>
          <button onClick={addInputHandler}>+++</button>
        </div>

        <div style={{ marginTop: 20 }}>
          <label htmlFor="minus">Minus-Input</label>
          <input type="number" id="minus" name="minus" ref={minusRef} ></input>
          <button onClick={minusInputHandler}>---</button>
        </div>
      </main>
    </>
  );
}

export default Inputs;
