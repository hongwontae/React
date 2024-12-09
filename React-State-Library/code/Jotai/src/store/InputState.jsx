import {atom} from 'jotai';

export const inputData = atom({name : '', age : ''})
export const readData = atom((get)=>{
    return get(inputData).name + 'HWT'
})
