import {createStore} from 'redux';

const initialState = {
    counter : 0,
    auth : false
}

const reducerFunc = (state =initialState, action )=>{
    if(action.type === 'increment'){
        return {
            counter : state.counter+1,
            auth : state.auth
        }
    }
    if(action.type === 'decrement'){
        return {
            counter : state.counter-1,
            auth : state.auth
        }
    }
    if(action.type === 'login'){
        return {
            auth : true,
            counter : state.counter,
        }
    }
    if(action.type === 'logout'){
        return {
            auth : false,
            counter : state.counter,
        }
    }
    return state; // useSelector로 접근할 떄의 값이다.
}

const store = createStore(reducerFunc);

export default store;