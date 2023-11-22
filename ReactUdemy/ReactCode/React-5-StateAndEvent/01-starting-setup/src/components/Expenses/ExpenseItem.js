import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import {useState} from 'react';

function ExpenseItem({date, title,amount}) {

  const [title1, setTitle1] = useState(title);  

  const clickHandler = ()=>{
    setTitle1('Updated');
    console.log('Clicked Me')
  }

  return(
    <Card className="expense-item">
      <ExpenseDate date={date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title1}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
