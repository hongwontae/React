import {createStore, combineReducers, applyMiddleware} from 'redux';
import counterReducer from '../reducers/CounterReducer';
import { UserReducerFunction } from '../reducers/UserReducer';
import {thunk} from 'redux-thunk';


const RootReducer = combineReducers({
    counternn : counterReducer,
    user : UserReducerFunction
})

const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;