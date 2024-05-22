import {configureStore} from '@reduxjs/toolkit';

import {counterSlice} from '../Slices/CounterSlice'
import { getSlice } from '../Slices/GetSlice';

export const store = configureStore({
    reducer : {
        counter : counterSlice.reducer,
        get : getSlice.reducer
    }
});