import ReactContextProvider from "./context/shopping-cart-context";
import CheckContext from "./components/CheckContext";
import CheckTwo from "./components/CheckTwo";
import CheckTwoContextProvider from "./context/check-two-context";

function App() {
  return (
    <>
      <CheckTwoContextProvider>
        <ReactContextProvider>
          <CheckContext></CheckContext>
          <CheckTwo></CheckTwo>
        </ReactContextProvider>
      </CheckTwoContextProvider>
    </>
  );
}

export default App;
