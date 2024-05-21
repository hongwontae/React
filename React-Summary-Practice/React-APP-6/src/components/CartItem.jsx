import {currencyFormatter} from '../util/formatting'

function CartItem(props){


    return(
        <>
           <li className="cart-item">
                <p>
                {props.name} - {props.quantity} x {currencyFormatter.format(props.price)}
                </p>
                <p className="cart-item-actions">
                    <button onClick={props.decrease}>-</button>
                    <span>{props.quantity}</span>
                    <button onClick={props.inCrease}>+</button>
                </p>
            </li> 
        </>
    )
}

export default CartItem;