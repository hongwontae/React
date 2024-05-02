import {useDispatch, useSelector} from 'react-redux';
import {counterSliceAction} from '../store/store2'

import '../App.css'

function Counter(){

    const dispatch = useDispatch();
    const stateCounter = useSelector((state)=>{
        return state.counter
    })

    function plusEvent(){
        dispatch(counterSliceAction.counterAdd());
    };

    function minusEvent(){
        dispatch(counterSliceAction.counterMinus());
    }




    return(
        <>
            <div>{stateCounter}</div>
            <button onClick={plusEvent}>+++</button>
            <button onClick={minusEvent}>---</button>
        </>
    )
}

export default Counter;