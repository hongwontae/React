import {create} from 'zustand';

export const fetchStore = create((set)=>({
    loading : false,
    data : [],
    fetchData : async ()=>{
        set({loading : true});
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const resData = await response.json()
        set({data : resData, loading : false});
    }
}))