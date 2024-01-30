import Header from "./components/Header";
import Meal from "./components/Meal";
import { CartContextProvider } from "./store/CartContext";

function App() {
  return (
    <>
      <CartContextProvider>
        <Header></Header>
        <Meal></Meal>
      </CartContextProvider>
    </>
  );
}

export default App;
