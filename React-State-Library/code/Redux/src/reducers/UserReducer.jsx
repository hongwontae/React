const initialState = {
    name : '',
    age : ''
};

export function UserReducerFunction(state=initialState, action){
    switch (action.type) {
        case 'NAME' :
            return {...state, name : action.payload.name}
        case 'AGE' : 
            return {...state, age : action.payload.age}
        default :
            return state
    }
}