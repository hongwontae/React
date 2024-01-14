import {createContext} from 'react';

export const CartContext = createContext({
    items : []
}); 
// 컨텍스트 값을 생성한다.
// CartContext는 리액트 컴포넌트가 된다.
// 상태 뿐만 아니라 숫자, 문자, 객체도 저장하고 줄 수 있다.

