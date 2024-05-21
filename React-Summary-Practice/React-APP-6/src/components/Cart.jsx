import Modal from "./UI/Modal";

import { useContext } from "react";
import { MealContext } from "../store/MealContext";
import { ModalContext } from "../store/ModalControlContext";

import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import CartItem from "./CartItem";

function Cart() {
  const { meals, addMeal, removeMeal } = useContext(MealContext);

  const { modalState, hideModal, showCheckout } = useContext(ModalContext);

  const totalPrice = meals.reduce((acc, cur) => {
    return acc + cur.quantity * cur.price;
  }, 0);

  return (
    <>
      <Modal
        className="cart"
        open={modalState === "cart"}
        onClose={modalState === "cart" ? hideModal : null}
      >
        <h2>Your Cart</h2>
        <ul>
          {meals.map((ele) => {
            return (
              <CartItem
                key={ele.id}
                {...ele}
                inCrease={() => addMeal(ele)}
                decrease={() => removeMeal(ele.id)}
              ></CartItem>
            );
          })}
        </ul>
        <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
        <p className="modal-actions">
          <Button textOnly onClick={() => hideModal()}>
            Close
          </Button>

          {meals.length > 0 && (
            <Button onClick={() => showCheckout()}>Go to Checkout</Button>
          )}
        </p>
      </Modal>
    </>
  );
}

export default Cart;
