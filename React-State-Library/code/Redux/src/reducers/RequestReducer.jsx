const initialState = {
    post : null,
    loading : false,
    error : null
}

export function RequestRedcuer(state = initialState, action){
    switch(action.type) {
        case 'FETCH-START' :
            return {...state, loading : true}
        case 'SUCCESS-FETCH' :
            return {...state, loading : false, post : action.payload}
        case 'ERROR' :
            return {loading : false, error : action.payload, post : null}
        default :
            return state;
    }
}