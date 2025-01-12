import PriceContextProvider from "./context/PriceContextProvider";
import TestComponent from "./components/TestComponent";
import NotPlayer from "./components/NotPlyaer";

function App() {
  return (
    <PriceContextProvider>
      <TestComponent></TestComponent>
      <NotPlayer></NotPlayer>
    </PriceContextProvider>
  );
}

export default App;
