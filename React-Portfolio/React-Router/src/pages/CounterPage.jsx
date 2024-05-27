import {useDispatch, useSelector} from 'react-redux';

import {counterSliceAction} from '../store/CounterSlice'

function CounterPage(){

    const dispatch = useDispatch();
    const counterState =  useSelector(state => state.counterReducer.counter);

    function plusHandler(){
        dispatch(counterSliceAction.plusReducer())
    }

    function minusHandler(){
        dispatch(counterSliceAction.minusReducer())
    }
    
    return(
        <>
            <h1>Counter here</h1>
            <div>{counterState}</div>
            <button onClick={plusHandler}>+</button>
            <button onClick={minusHandler}>-</button>
        </>
    )
}

export default CounterPage;