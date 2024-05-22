/* eslint-disable no-unused-vars */
import {useDispatch, useSelector} from 'react-redux';

import {counterSliceAction} from '../redux-store/Slices/CounterSlice'

function Counter(){

    const counterState = useSelector((state)=> state.counter.counter);

    return(
        <>
            <h2>This is Counter</h2>
            <p>{counterState}</p>

        </>
    )
}

export default Counter;