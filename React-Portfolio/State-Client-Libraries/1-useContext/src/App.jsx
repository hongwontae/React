import InputPage from "./components/InputPage";
import InputContext from "./context/InputContext";
import ButtonContext from "./context/ButtonContext";

import ButtonImage from "./context/ButtonImage";
import ButtonImageComponent from "./components/ButtonImageComponent";

function App() {
  return (
    <>
      <ButtonImage>
        <InputContext>
          <ButtonContext>
            <InputPage></InputPage>
            <ButtonImageComponent></ButtonImageComponent>
          </ButtonContext>
        </InputContext>
      </ButtonImage>
    </>
  );
}

export default App;
