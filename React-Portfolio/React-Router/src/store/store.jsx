import {configureStore} from '@reduxjs/toolkit';

import {counterSliceReducer} from './CounterSlice';
import {BoardSlice} from './BoardSlice'

export const store = configureStore({
    reducer : {
        counterReducer : counterSliceReducer,
        boardReducer : BoardSlice.reducer
    }
})