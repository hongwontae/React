import {useState} from 'react';
import DivChange from './components/DivChange';

function App() {

  const [btnChange, setBtnChange] = useState('good')

  const lookChange = ()=>{
    setBtnChange('bad')
  }
  


  return (
    <>
    <DivChange handler={lookChange}>Button</DivChange>
    <div>{btnChange}</div>
    </>
  );
}

export default App;
