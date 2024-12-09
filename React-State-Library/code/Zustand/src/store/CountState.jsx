import {create} from 'zustand';

export const CountStore = create((set)=>({
    count : 0,
    increment : ()=>set((prev)=>({count : prev.count+1})),
    decrement : ()=>set((prev)=>({count : prev.count-1})),
}))