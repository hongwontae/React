import {createStore, combineReducers, applyMiddleware} from 'redux';
import counterReducer from '../reducers/CounterReducer';
import { UserReducerFunction } from '../reducers/UserReducer';
import {thunk} from 'redux-thunk';
import {RequestRedcuer} from '../reducers/RequestReducer';


const RootReducer = combineReducers({
    counternn : counterReducer,
    user : UserReducerFunction,
    request : RequestRedcuer
})

const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;