import {createStore} from 'redux';

function reducerFunc(state = {counter : 0}, action){
    if(action.type === 'increment'){
        return {
            counter : state.counter+1
        }
    }
    if(action.type === 'decrement'){
        return {
            counter : state.counter-1
        }
    }
    return state;
    
}


const Store = createStore(reducerFunc);
export default Store;