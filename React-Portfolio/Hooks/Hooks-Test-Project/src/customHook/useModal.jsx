import { useEffect } from "react";

export function useModal(open, ref){
    useEffect(()=>{
        
        const dialog2 = ref.current
        // useEffect에서 사용하는 dialog가 본문이나 클린 업 함수에서 다른 것을
        // target할 가능성이 존재하기 때문에 무결함을 위해 dialog 값 생성

        if(open){
            dialog2.showModal();
        }
        return ()=>{
            dialog2.close();
            console.log('Hello')
        }
    },[open, ref] )
}