import {createStore} from 'redux'

function counterReducer(state = {counter : 0}, actions){
    if(actions.type === 'ADD'){
        return {
            counter : state.counter+1
        } 
    } else if(actions.type === 'MINUS'){
        return {
            counter : state.counter-1
        }
    } else{
        return state
    }
}

const store = createStore(counterReducer);

export default store;