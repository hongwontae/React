import { useSetRecoilState, useRecoilValue } from "recoil";
import {ModalState} from '../recoil-state/modalState';

function Modal() {

    const modalSt = useRecoilValue(ModalState)

    const setModal = useSetRecoilState(ModalState)

  return (
    <>
      <dialog open={modalSt} onClose={()=>setModal(false)}>
        <h1>Hello</h1>
        <button onClick={()=>setModal(false)}>Close</button>
      </dialog>
    </>
  );
}

export default Modal;
