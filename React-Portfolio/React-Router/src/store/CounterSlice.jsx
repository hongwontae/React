/* eslint-disable no-unused-vars */
import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name : 'counter',
    initialState : {
        counter : 0,
        toggle : false
    },
    reducers : {
        plusReducer(state, action){
            state.counter++
        },
        minusReducer(state, action){
            state.counter--;
        },
    }
});

export const counterSliceAction = counterSlice.actions;
export const counterSliceReducer = counterSlice.reducer;