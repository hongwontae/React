import { useDeferredValue } from "react";
import { useState } from "react";
import { useId } from "react";

function TestForm() {
  const testId = useId();

  const [testData, setTestData] = useState('');

  const deferValue = useDeferredValue(testData);


  function inputHandler(e){
    setTestData(e.target.value)
  }

  return (
    <>
      <form>
        <label htmlFor={testId}>Test</label>
        <input id={testId} name="test" type="text"></input>
        <label htmlFor="defer">Usedeferred Test</label>
        <input id="defer" type="text" onChange={inputHandler} value={testData}></input>
        <p>{deferValue}</p>
      </form>
    </>
  );
}

export default TestForm;
