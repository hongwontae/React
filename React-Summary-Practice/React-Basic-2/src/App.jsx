import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import InputCal from "./components/InputCal";

function App() {
  const [text, setText] = useState('Hello Everyone!');

  function changeTitleHandler(inputTitle) {
    setText(inputTitle.target.value);
  }

  return (
    <>
      <Header title={text}></Header>
      <MainContent
        id="Main-Content"
        title={text}
        change={changeTitleHandler}
      ></MainContent>
      <InputCal></InputCal>
    </>
  );
}

export default App;
