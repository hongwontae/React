import {useDispatch, useSelector} from 'react-redux';
import {counterSliceAction} from '../store/store2'

function Counter2(){

    const dispatch = useDispatch();
    const stateCounter = useSelector((state)=>{
        return state.counter
    })

    function plusEvent(){
        dispatch(counterSliceAction.counterAdd());
    }

    function minusEvent(){
        dispatch(counterSliceAction.counterMinus());
    }

    function checkFunc(){
        dispatch(counterSliceAction.checkFunc())
    }



    return(
        <>
            <div>{stateCounter}</div>
            <button onClick={plusEvent}>+++</button>
            <button onClick={minusEvent}>---</button>
            <button onClick={checkFunc}>???</button>
        </>
    )
}

export default Counter2;