import InputPage from "./components/InputPage";
import InputContext from "./context/InputContext";
import ButtonContext from './context/ButtonContext'

function App() {
  return (
    <>
      <InputContext>
        <ButtonContext>
          <InputPage></InputPage>
        </ButtonContext>
      </InputContext>
    </>
  );
}

export default App;
