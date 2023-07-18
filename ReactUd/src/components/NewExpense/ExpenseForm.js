import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enterAmount, setEnterAmount] = useState('')
    const [enterDate, setEnterDate] = useState('')

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value)
    }

    const AmountHandler = (event) => {
        setEnterAmount(event.target.value)
    }

    const DateHandler = (event) =>{
        setEnterDate(event.target.value)
    }

    const submitHandler = (event)=>{
        event.preventDefault()

        const expenseData = {
            titl : enteredTitle,
            amount : enterAmount,
            date : new Date(enterDate)
        }

        props.onSaveExpenseData(expenseData);
        setEnterAmount('')
        setEnterDate('')
        setEnteredTitle('')
    }

    // const [userInput, setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // })

    // const titleChangeHandler = (event)=>{
    //     setUserInput({
    //         ...userInput,
    //         enteredTitle: event.target.value
    //     })

    //     setUserInput((pervState)=>{
    //         return{...pervState, enteredTitle : event.target.value}
    //     })
    // }

    // const AmountHandler = (event) =>{
    //     setUserInput({
    //         ...userInput,
    //         enteredAmount : event.target.value
    //     })
    // }

    // const DateHandler = (event) =>{
    //     setUserInput({
    //         ...userInput,
    //         enteredDate : event.target.value
    //     })
    // }

    

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={enterAmount} min='0.01' step='0.01' onChange={AmountHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={enterDate} min='2019-01-01' max='2022-12-31' onChange={DateHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;