import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({onAddExpense}) => {

    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        console.log(expenseData);
        onAddExpense(expenseData);
    }
    
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpneseDate={saveExpenseDataHandler}></ExpenseForm>
        </div>
    )

}

export default NewExpense;