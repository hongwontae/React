import { useState } from "react";

export function useInput(defaultValue, validationFn){

    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false)

    const valueIsValid = validationFn(enteredValue);
    
  function handleInputData(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true)
  }

  return {
    value : enteredValue,
    handleInputData,
    handleInputBlur,
    hasError : didEdit && !valueIsValid
  }

}

