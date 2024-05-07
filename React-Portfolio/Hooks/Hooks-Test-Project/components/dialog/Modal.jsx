import {forwardRef, useImperativeHandle, useRef} from 'react'
import {createPortal} from 'react-dom';

// eslint-disable-next-line no-unused-vars, no-empty-pattern
const Modal = forwardRef(function Modal({}, ref) {

    const dialog = useRef();


    useImperativeHandle(ref,()=>{
        return {
            open(){
                dialog.current.showModal();
            }
        }
    } ); //forward와 함께 사용해야 한다.

  return createPortal(
    <>
      <dialog ref={dialog} className="result-modal">
        <h2>you great!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nemo
          cupiditate ipsam inventore sint officia ratione culpa, sunt commodi
          voluptatibus cum iure quas magni similique mollitia consequuntur
          nesciunt deserunt vel?
        </p>
        <form method="dialog">
            <button>Close</button>
        </form>
      </dialog>
    </>,
    document.getElementById('modal')
  )
})

export default Modal;
