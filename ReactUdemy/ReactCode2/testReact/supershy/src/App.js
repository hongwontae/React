import Button from './UI/Button';
import Liver from './components/Liver';
import PropsTestCom from './components/PropsTestCom';
import PropsTestCom2 from './components/PropsTestCom2';
import {CORE_CONCEPTS} from './data';

function App() {

  let btn = 'button';

  return (
    <>
      <Liver data={CORE_CONCEPTS}></Liver>
      <Button BTN={btn} test={PropsTestCom}>Save!</Button>
      <PropsTestCom2 {...CORE_CONCEPTS}></PropsTestCom2>
    </>
  );
}

export default App;
