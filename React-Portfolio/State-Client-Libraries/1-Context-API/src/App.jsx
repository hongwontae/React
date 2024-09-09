import Header from "./components/Header";
import CountTest from "./components/CountTest";
import CountTestSecond from "./components/CountTestSecond";

import { CounterContextProvider } from "./context/CounterContext";
import TestComponent from "./components/TestComponent";
import { InputContextProvider } from "./context/InputContext";

function App() {
  return (
    <>
      <InputContextProvider>
        <CounterContextProvider>
          <Header></Header>
          <CountTest></CountTest>
          <CountTestSecond></CountTestSecond>
          <TestComponent></TestComponent>
        </CounterContextProvider>
      </InputContextProvider>
    </>
  );
}

export default App;
