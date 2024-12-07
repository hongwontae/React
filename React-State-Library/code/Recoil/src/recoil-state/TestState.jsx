import {atom, selector} from 'recoil';


export const testAtom = atom({
    key : 'testAtom',
    default : 1
});


export const testSelector = selector({
    key : 'testSelector',
    get :  async ({get})=>{
        const state = get(testAtom)

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${state}`)

        if(!response.ok){
            throw new Error('number is not')
        }

        const resData = await response.json()

        return resData;


    }
})