import createSagaMiddleware from 'redux-saga';
import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../user/userSlice';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer : {
        user : userReducer
    },
    middleware : (getDefaultMiddleware)=>{
        return getDefaultMiddleware({thunk : false}).concat(sagaMiddleware)
    }
});

sagaMiddleware.run(rootSaga);

export default store;
