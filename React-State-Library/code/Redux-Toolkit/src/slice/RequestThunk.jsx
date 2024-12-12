/* eslint-disable no-unused-vars */
import {createAsyncThunk} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

export const RequestThunk = createAsyncThunk('get/jsonplaceholder',
    async (_, thunkAPI)=>{
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const resData = await response.json();
            return resData;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const RequestSlice = createSlice({
    name : 'request',
    initialState : {
        data : null,
        loading : false,
        error : null
    },
    extraReducers : (builder)=>{
        builder.addCase(RequestThunk.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(RequestThunk.fulfilled, (state, action)=>{
            state.loading = false
            state.data = action.payload
        })
        .addCase(RequestThunk.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})

export default RequestSlice;


