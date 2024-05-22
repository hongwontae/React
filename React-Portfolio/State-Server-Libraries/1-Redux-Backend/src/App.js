import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./Redux-Store/ui-slice";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";

import Notification from "./components/UI/Notification";

let value = true;

function App() {
  const dispatch = useDispatch();

  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  console.log(notification);

  useEffect(() => {

    if(value){
      value = false;
      return
    }

    async function sendCartData() {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending",
          message: "Sending cart data",
        })
      );

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cart),
        }
      );


      if (!response.ok) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "error",
            message: "error cart data",
          })
        );
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "success Sending",
          message: "success Sending cart data",
        })
      );
    }

    sendCartData();
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        ></Notification>
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
