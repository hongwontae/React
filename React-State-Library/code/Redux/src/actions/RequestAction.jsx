/* eslint-disable no-unused-vars */
export function RequestActionCreator(){
    return async (dispatch, getState)=>{
        dispatch({type : 'FETCH-START'});
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const resData = await response.json()
            dispatch({type : 'SUCCESS-FETCH', payload : resData})
        } catch (error) {
            console.log(error)
            dispatch({type : 'ERROR', payload : error.message})
        }
    }
}