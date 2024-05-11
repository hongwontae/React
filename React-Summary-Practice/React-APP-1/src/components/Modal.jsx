import {forwardRef, useRef} from 'react'
import {useImperativeHandle} from 'react';
import {createPortal} from 'react-dom'
import Button from './Button';

// eslint-disable-next-line react/prop-types
const Modal = forwardRef(function Modal({ children, buttonCaption },ref) {

    const dialogRef = useRef();

    useImperativeHandle(ref, ()=>{
        return {
            open : ()=>{
                dialogRef.current.showModal();
            }
        }
    })


  return createPortal(
    <>
      <dialog ref={dialogRef} className='backdrop:bg-stone-900/90 p-4 shadow-md'>
        {children}
        <form method="dialog" className='mt-4 text-right'>
          <Button>{buttonCaption}</Button>
        </form>
      </dialog>
    </>,
    document.getElementById('root')
  );
})

export default Modal;
