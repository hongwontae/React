import {  useRef } from "react";
import {createPortal} from 'react-dom'
import { useModal } from "../customHook/useModal";


/* eslint-disable react/prop-types */
function Modal({children, open, onClose}){

    const dialog = useRef();

    useModal(open, dialog);


    return createPortal(
        <>
            <dialog ref={dialog} onClose={onClose}>
                {children}
            </dialog>
        </>, document.getElementById('modal')
    )
}

export default Modal;