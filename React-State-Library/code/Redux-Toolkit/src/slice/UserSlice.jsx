import {createSlice} from '@reduxjs/toolkit';


const UserSlice = createSlice({
    name : 'user',
    initialState : {name : '', age : ''},
    reducers : {
        nameHandler : (state, action)=>{
            state.name = action.payload
        },
        ageHandler : (state, action)=>{
            state.age = action.payload
        }
    }
})

export const {nameHandler, ageHandler} = UserSlice.actions;
export default UserSlice