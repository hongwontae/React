import { useContext } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Modal from "./UI/Modal";
import { MealContext } from "../store/MealContext";

import {currencyFormatter} from '../util/formatting'
import { ModalContext } from "../store/ModalControlContext";

function CheckoutModal(){

  const { meals } = useContext(MealContext);

  const {modalState, hideModal } = useContext(ModalContext)

  const totalPrice = meals.reduce((acc, cur) => {
    return acc + cur.quantity * cur.price;
  }, 0);

  function submitHandler(e){
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());

  }



    return(
        <>
            <Modal open={modalState === 'check'}>
                <form onSubmit={submitHandler}>
                <h2>CheckOut</h2>
                <p>Total Amount : {currencyFormatter.format(totalPrice)}</p>

                <Input label="Full Name" type="text" id="full-name"></Input>
                <Input label="E-Mai Address" type="email" id="email"></Input>
                <Input label="Street" type="text" id="street"></Input>
                <div className="control-row">
                    <Input label="Postal Code" type="text" id="postal-code"></Input>
                    <Input label="City" type="text" id="city"></Input>
                </div>
                <p className="modal-actions">
                    <Button textOnly onClick={hideModal}>Close</Button>
                    <Button>Submit Order</Button>
                </p>
                </form>
            </Modal>
        </>
    )
}

export default CheckoutModal;