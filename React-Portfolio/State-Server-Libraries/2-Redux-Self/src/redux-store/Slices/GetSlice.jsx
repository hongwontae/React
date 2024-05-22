/* eslint-disable no-unused-vars */
import {createSlice} from '@reduxjs/toolkit';

export const getSlice = createSlice({
    name : 'get',
    initialState : {
        items : [],
        comState : {},
    },
    reducers : {
        showReducer(state, action){
            const responseState = action.payload;
            state.comState = responseState
        },
        getRender(state, action){
            const resData = action.payload;
            state.items = resData;
        }     
    }
})

export const getSliceAction = getSlice.actions;