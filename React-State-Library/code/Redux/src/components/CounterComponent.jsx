import {useDispatch, useSelector} from 'react-redux';
import {decrement, incremnet} from '../actions/CounterAction';

function CounterComponent(){
    
    const dispatch = useDispatch();
    const count = useSelector(state=>state.counternn.count);
    
    return(
        <>
        <div>
            <h1>Hello-world</h1>
            <div>{count}</div>
            <button onClick={()=>dispatch(incremnet())}>Up</button>
            <button onClickCapture={()=>dispatch(decrement())}>Down</button>
        </div>
        </>
    )
}

export default CounterComponent;