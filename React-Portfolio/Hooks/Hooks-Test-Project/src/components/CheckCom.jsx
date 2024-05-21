/* eslint-disable react/prop-types */
import Modal from "./Modal";

function CheckCom({modal, modalHide}){

    function hideModal(){
        modalHide('')
    }


    return(
        <Modal open={modal === 'check'} onClose={hideModal}>
            <h2>Hello World</h2>
            <p>you check components?</p>
            <button onClick={hideModal}>Close!</button>
        </Modal>
    )
}

export default CheckCom;