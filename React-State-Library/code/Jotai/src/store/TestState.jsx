import { atom,  } from 'jotai';

// 일반 상태 atom (기본 값: 0)
export const countAtom = atom({count : 1});

// 파생 상태 atom (countAtom의 값을 기반으로 2배로 계산)
export const doubledCountAtom = atom((get) => get(countAtom).count * 2);