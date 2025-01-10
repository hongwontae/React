import PriceContextProvider from "./context/PriceContextProvider";
import TestComponent from "./components/TestComponent";

function App() {
  return (
    <PriceContextProvider>
      <TestComponent></TestComponent>
    </PriceContextProvider>
  );
}

export default App;
