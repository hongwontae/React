import {configureStore} from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialCounter ={
    counter : 0
}

const counterSlice = createSlice({
    name : 'counter',
    initialState : initialCounter,
    reducers : {
        counterAdd(state){
            state.counter++;
        },
        counterMinus(state){
            state.counter--;
        }
    }
})


const store2 = configureStore({
    reducer : counterSlice.reducer
})

export default store2
export const counterSliceAction = counterSlice.actions;