import Modal from "./UI/Modal";

import { useContext } from "react";
import { MealContext } from "../store/MealContext";
import { ModalContext } from "../store/ModalControlContext";

import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";

function Cart() {
  const { meals } = useContext(MealContext);

  const { modalState, showModal, hideModal } = useContext(ModalContext);

  const totalPrice = meals.reduce((acc, cur) => {
    return acc + cur.quantity * cur.price;
  }, 0);

  return (
    <>
      <Modal className="cart" open={modalState === "cart"}>
        <h2>Your Cart</h2>
        <ul>
          {meals.map((ele) => {
            return (
              <li key={ele.id}>
                {ele.name} - {ele.quantity}
              </li>
            );
          })}
        </ul>
        <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
        <p className="modal-actions">
          <Button textOnly onClick={()=>hideModal()}>Close</Button>
          <Button>Go to Checkout</Button>
        </p>
      </Modal>
    </>
  );
}

export default Cart;
