import { useReducer } from "react";
import { createContext } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart : ()=>{}
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
      // 기존 배열의 id와 인자로 들어오는 id를 비교하여 id 같은 배열의 인덱스를 반환한다.
    });

    const updatedItems = [...state.items];
    // 주소값만 다른 기존의 state

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });

    const existingCartItem = state.items[existingCartItemIndex];
    // 삭제하기 위해 해당 item를 가져온다.

    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItem, 1);
      // 1과 같다면 없애기 위해 splice를 사용한다.
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      }; // 그렇지 않다면 기존아이템은 납두고 quantity만 -1한다.
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  if(action.type === 'CLEAR_CART'){
    return {...state, items:[]}
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, disPatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    disPatchCartAction({ type: "ADD_ITEM", item });
  }
  function removeItem(id) {
    disPatchCartAction({
      type: "REMOVE_ITEM",
      id,
    });
  }
  function clearCart(){
    disPatchCartAction({type : 'CLEAR_CART'})
  }

  const cartContext = {
    items: cart.items,
    addItem,  
    removeItem,
    clearCart
  };

  console.log(cartContext);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
