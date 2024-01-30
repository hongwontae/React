import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../../store/CartContext";
import {currencyFormatter} from '../../util/formatting'
import Button from '../UI/Button'
import UserProgressContext from "../../store/UserProgressContext";

export default function Cart() {
  
  const cartCtx = useContext(CartContext);
  const {progress, hideCart} = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce((totalPrice, item)=>{
        return totalPrice+item.quantity*item.price
    },0)

    function handleCloseCart(){
      hideCart();
    }



  return (
    <Modal className="cart" open={progress === 'cart'}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((ele, idx, arr) => {
          return (
            <li key={ele.id}>
              {ele.name} - {ele.quantity}
            </li>
          );
        })}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button onClick={handleCloseCart} textOnly>Close</Button>
        <Button onClick={handleCloseCart}>GO to Checkout</Button>
      </p>
\
    </Modal>
  );
}
