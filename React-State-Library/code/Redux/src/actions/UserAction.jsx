export function nameHandler(e){
    return {
        type : 'NAME',
        payload : {
            name : e.target.value
        }
    }
}

export function ageHandler(e){
    return {
        type : 'AGE',
        payload : {
            age : e.target.value
        }
    }
}