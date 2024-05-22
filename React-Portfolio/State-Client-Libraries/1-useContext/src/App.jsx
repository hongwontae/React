import InputPage from "./components/InputPage";
import InputContext from "./context/InputContext";
import ButtonContext from "./context/ButtonContext";

import ButtonImage from "./context/ButtonImage";
import ButtonImageComponent from "./components/ButtonImageComponent";
import CheckContextProvider from "./context/CheckContext";
import CheckComponents from "./components/CheckComponents";
import Same from "./components/Same";

function App() {
  return (
    <>
      <ButtonImage>
        <InputContext>
          <ButtonContext>
            <CheckContextProvider>
              <InputPage></InputPage>
              <ButtonImageComponent></ButtonImageComponent>
              <CheckComponents></CheckComponents>
              <Same></Same>
            </CheckContextProvider>
          </ButtonContext>
        </InputContext>
      </ButtonImage>
    </>
  );
}

export default App;
