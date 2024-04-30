import React, { useState } from 'react';
import Header from "./components/Header"
import UserInput from './components/UserInput';
import Results from './components/Results';

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >=1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: Number(newValue), // or +
      };
    });
  };
  return (
    <React.Fragment>
      <Header></Header>
      <UserInput onChange={handleChange} userInput={userInput}></UserInput>
      {inputIsValid ? <Results input={userInput}></Results> : <p className='center'>Duration not -</p>}
    </React.Fragment>
    
  )
}

export default App
