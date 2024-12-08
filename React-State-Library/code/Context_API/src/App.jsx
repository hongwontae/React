import { styled } from "styled-components";
import "./App.css";
import InputComponent from "./components/InputComponent";
import TestComponent from "./components/TestComponent";
import { InputContextProvider } from "./store/InputContext";
import { CountContextProvider } from "./store/CountContext";
import CountComponent from "./components/CountComponent";
import { RequestContextProvider } from "./store/RequestContext";
import RequestComponent from "./components/RequestComponent";

const AllContainer = styled.div`
  text-align: center;
  color: black;
  font-family: "Courier New", Courier, monospace;
`;

function App() {
  return (
    <>
      <RequestContextProvider>
        <InputContextProvider>
          <CountContextProvider>
            <AllContainer>
              <h1>Hello - Context-API</h1>
              <InputComponent></InputComponent>
              <TestComponent></TestComponent>
              <CountComponent></CountComponent>
              <RequestComponent></RequestComponent>
            </AllContainer>
          </CountContextProvider>
        </InputContextProvider>
      </RequestContextProvider>
    </>
  );
}

export default App;
