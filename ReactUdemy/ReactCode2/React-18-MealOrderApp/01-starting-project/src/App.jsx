import Header from "./components/Header";
import Meal from "./components/Meal";
import Cart from "./components/UI/Cart";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <>
      <CartContextProvider>
        <UserProgressContextProvider>
          <Header></Header>
          <Cart></Cart>
          <Meal></Meal>
        </UserProgressContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
