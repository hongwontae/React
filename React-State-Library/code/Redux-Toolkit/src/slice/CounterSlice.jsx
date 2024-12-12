import {createSlice} from '@reduxjs/toolkit';


const counterSlice = createSlice({
    name : 'counter',
    initialState : {value : 1},
    reducers : {
        increment : (state)=>{
            state.value = state.value+1
        },
        decrement : (state)=>{
            state.value = state.value-1
        },
        indement : (state, action)=>{
            state.value = state.value + action.payload
        },
        reset : (state)=>{
            state.value = 0
        }
    }
})

export const {increment, decrement, indement, reset} = counterSlice.actions;
export default counterSlice;