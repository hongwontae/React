import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";

import MealContextProvider from "./store/MealContext";
import ModalContextProvider from "./store/ModalControlContext";

function App() {
  return (
    <>
      <ModalContextProvider>
        <MealContextProvider>
          <Header></Header>
          <Meals></Meals>
          <Cart></Cart>
        </MealContextProvider>
      </ModalContextProvider>
    </>
  );
}

export default App;
