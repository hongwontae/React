import {useReducer} from 'react';

function reducerFunc1(state, action){
    if(action.type === 'true'){
        return false
    }
    if(action.type === 'false'){
        return true
    }
}

function RiverPool(){

    const [initialState, dispatch] = useReducer(reducerFunc1, true);

    function changeTure(){
        dispatch({type : 'true'});
    }

    function changeFalse(){
        dispatch({type : 'false'});
    }

    return(
        <>
        {initialState ? <div>True</div> : <div>False</div>}
        <button onClick={changeTure}>True!</button>
        <button onClick={changeFalse}>False!</button>
        </>
    )
}

export default RiverPool;
