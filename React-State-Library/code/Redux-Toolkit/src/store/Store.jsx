import {configureStore} from '@reduxjs/toolkit';
import CounterSlice from '../slice/CounterSlice';
import UserSlice from '../slice/UserSlice';
import RequestSlice from '../slice/RequestThunk';


const store = configureStore({
    reducer : {
        counter : CounterSlice.reducer,
        user : UserSlice.reducer,
        request : RequestSlice.reducer
    }
})

export default store;