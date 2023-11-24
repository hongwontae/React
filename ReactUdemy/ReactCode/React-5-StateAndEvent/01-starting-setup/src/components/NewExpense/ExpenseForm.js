import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseFrom = () => {
  
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitle : '',
  //   enteredAmount : '',
  //   enteredDate : '',
  // })


  const titleChangeHandler = (event)=>{
    setEnteredTitle(event.target.value);
    console.log(enteredTitle)
    // // setUserInput({
    // //   ...userInput,
    // //   enteredTitle : event.target.value
    // // })
    // setUserInput((prevState)=>{
    //   return {...prevState, enteredTitle : event.target.value}
    // })
  }

  const amountChangeHandler = (event)=>{
    // setUserInput({
    //   ...userInput,
    //   enteredAmount : event.target.value
    // })
    setEnteredAmount(event.target.value)
  };

  const dateChangeHandler = (event)=>{
    // setUserInput({
    //   ...userInput,
    //   enteredDate : event.target.valu
    // })
    setEnteredDate(event.target.value)
  }

  // const inputChangeHandler = (identifier,value)=>{
  //   if(identifier === 'title'){
  //     setEnteredTitle(value)
  //   } else if(identifier === 'date'){
  //     setEnteredDate(value)
  //   } else{
  //     setEnteredAmount(value);
  //   }
  // }

  const submitHandler = (event)=>{
    event.preventDefault();

    const expenseData = {
      title : enteredTitle,
      amount : enteredAmount,
      date : new Date(enteredDate)
    }
    console.log(expenseData);
  }


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={titleChangeHandler} type="text" value={enteredTitle}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input onChange={amountChangeHandler} type="number" min="0.01" step="0.01" value={enteredAmount}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input onChange={dateChangeHandler} type="date" min="2019-01-01" max="2023-11-22" value={enteredDate}></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseFrom;
