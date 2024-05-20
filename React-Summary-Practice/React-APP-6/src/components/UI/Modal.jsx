import { useEffect, useRef } from "react";
import {createPortal} from 'react-dom'

function Modal({children, open, className=''}){

    const dialog = useRef();

    useEffect(()=>{
        if(open){
            dialog.current.showModal();
        }
        return ()=>{
            dialog.current.close();
        } // open이 false가 되면서 값이 변경되어 useEffect의 본문이 실행되기 전에 클린업 함수 실행
            // 다음 useEffect가 실행되면서 if문 충족하지 못해 그대로 현상 유지
    }, [open])

    console.log('Modal 컴포넌트')

    return createPortal(
        <>
            <dialog className={`modal ${className}`} ref={dialog}>
                {children}
            </dialog>
        </>,
        document.getElementById('modal')
    )
}

export default Modal;