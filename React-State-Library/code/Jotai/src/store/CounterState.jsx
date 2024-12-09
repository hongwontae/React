import {atom} from 'jotai';

export const CounterAtom = atom({count : 1})

export const SeparatedAtom = atom(
    (get)=> get(CounterAtom).count,
    (get, set, newValue)=>{
        set(CounterAtom, {count : get(CounterAtom).count+newValue})
    }
)