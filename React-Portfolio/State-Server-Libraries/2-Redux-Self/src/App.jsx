import "./App.css";
import Buttons from "./components/Buttons";
import Counter from "./components/Counter";

import {useSelector} from 'react-redux'
import Inputs from "./components/Inputs";
import GetPage from "./components/GetPage";


function App() {

  const toggleState = useSelector(state => state.counter.isvisible);
  console.log(toggleState)

  return (
    <>
      {toggleState && <Counter></Counter>}
      <Buttons></Buttons>
      <Inputs></Inputs>
      <GetPage></GetPage>
    </>
  );
}

export default App;
