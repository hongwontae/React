import { useRef } from 'react';
import {decrement, increment, indement, reset} from '../slice/CounterSlice'
import {useDispatch, useSelector} from 'react-redux';

function CounterComponent(){

    const dispatch = useDispatch();
    const value = useSelector(state=>state.counter.value)
    const numRef = useRef(null)

    return(
        <>
            <h2>Counter-Component</h2>
            <div>{value}</div>
            <input type='number' ref={numRef}></input>
            <div>
                <button onClick={()=>dispatch(increment())}>Up</button>
                <button onClick={()=>dispatch(decrement())}>Down</button>
                <button onClick={()=>dispatch(indement(Number(numRef?.current?.value)))}>Amount</button>
                <button onClick={()=>dispatch(reset())}>Reset</button>
            </div>
        </>
    )
}

export default CounterComponent;