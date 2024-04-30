import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

import {useState} from 'react'

function App() {

  const [text,setText] = useState('');

  function changeLevel(text){
    setText(text)
  }

  return (
    <>
      <Header></Header>
      <MainContent text={text} onChange={changeLevel}></MainContent>
    </>
  );
}

export default App;
