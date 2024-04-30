import {configureStore} from '@reduxjs/toolkit'
import articeData from './dataChangeSlice';


const storeIndex = configureStore({
    reducer : {
        articleChange : articeData.reducer
    }
})

export default storeIndex;