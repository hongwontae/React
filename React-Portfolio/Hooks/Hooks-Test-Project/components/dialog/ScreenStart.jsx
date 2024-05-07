import Modal from "./Modal";
import { useRef } from "react";

function ScreenStart(){


    const dialog = useRef()

    function modaltrigger(){
        dialog.current.open();
    }

    return(
        <>
        <Modal ref={dialog}></Modal>
        <button onClick={modaltrigger}>Modal Go and Out</button>
        </>
    )
}

export default ScreenStart;