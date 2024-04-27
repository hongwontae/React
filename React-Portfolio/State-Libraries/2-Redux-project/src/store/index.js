import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialState = {counter : 0, showCounter : true};

const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increment(state){
            state.counter++;
        }, 
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
})
// 나중에 리덕스에 의해 호출되고 현 state를 자동으로 받는다.
// 리덕스 툴킷은 내부적으로 immer라는 패키지 사용 => 기존 상태 변경을 막고 새로운 객체로 만들어낸다.




const store = configureStore({
    reducer : counterSlice.reducer
});
export const counterActions = counterSlice.actions;
console.log(counterActions)
export default store;