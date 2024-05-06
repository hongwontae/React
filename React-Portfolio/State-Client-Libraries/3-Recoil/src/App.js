
import { RecoilRoot } from "recoil";
import "./App.css";
import TextInput from "./components/TextInput";
import RandomChange from "./components/RandomChange";

function App() {
  return (
    <>
      <RecoilRoot>
    <TextInput></TextInput>
    <RandomChange></RandomChange>
      </RecoilRoot>
    </>
  );
}



export default App;

