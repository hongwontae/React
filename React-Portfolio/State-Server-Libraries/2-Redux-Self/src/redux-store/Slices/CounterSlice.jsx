/* eslint-disable no-unused-vars */
import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name : 'counter',
    initialState : {
        counter : 0,
        isvisible : true,
    },
    reducers : {
        increment(state, action){
            state.counter++;
        },
        decrement(state, action){
            state.counter--;
        },
        inputIncrement(state, action){
            state.counter = state.counter+action.payload
        },
        inputDecrement(state, action){
            state.counter = state.counter-action.payload
        },
        toggle(state, action){
            state.isvisible = !state.isvisible;
        }
    }
});

export const counterSliceAction = counterSlice.actions;

