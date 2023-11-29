import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({onAddExpense}) => {

    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        onAddExpense(expenseData);
    }
    
    return (
        <div className='new-expense'>
            <button>Add New Expense</button>
            <ExpenseForm onSaveExpneseDate={saveExpenseDataHandler}></ExpenseForm>
        </div>
    )

}

export default NewExpense;