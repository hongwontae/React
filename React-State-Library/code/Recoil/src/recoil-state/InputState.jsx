import {atom, selector} from 'recoil'

export const inputState = atom({
    key : 'name-state',
    default : {
        name : null,
        age : null
    }
})

export const inputSelector = selector({
    key : 'name-length',
    get : ({get})=>{
        const text = get(inputState);
        return text.name.length
    }
})

export function initialRecoil({set}){
    set(inputState, {name : 'HWT', age : 20})
}