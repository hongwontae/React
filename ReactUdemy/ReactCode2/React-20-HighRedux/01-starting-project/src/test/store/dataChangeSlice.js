import {createSlice} from '@reduxjs/toolkit'

const articeData = createSlice({
    name : 'article',
    initialState : {arti : 'none-data'},
    reducers : {
        changeData(state, action){
            state.arti = action.payload
        }
    }
})

export const artiAction = articeData.actions;

export default articeData;