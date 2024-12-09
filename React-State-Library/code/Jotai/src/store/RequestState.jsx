import {atom} from 'jotai';

export const RequestAtom = atom({})


export const WritableRequestAtom = atom(
    (get)=> get(RequestAtom),
    (get, set, newValue=1) => {
        set(RequestAtom, async ()=>{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${newValue}`)
            const resData = await response.json()
            return resData;
        })
    }
)