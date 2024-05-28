import {createSlice} from '@reduxjs/toolkit';

export const BoardSlice = createSlice({
    name : 'boardSlice',
    initialState : {
        boardData : [
            
        ]
    },
    reducers : {
        registerReducer(state, action){

            const id = Math.random().toFixed(4);
           
            const data = {
                id : id,
                title : action.payload.title,
                age : action.payload.age,
                carrier : action.payload.carrier,
                date : action.payload.date
            };
            console.log(data);
            state.boardData.push(data);
        }
    }
});

export const boardSliceAction = BoardSlice.actions;


