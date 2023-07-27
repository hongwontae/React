import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import { useState } from 'react';

const ExpenseItem = (props) => {

 const [title, setTitle] = useState(props.title)

  const handlerChange = () => {
    setTitle('upDate!');
    console.log(title)
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div> {/* 여기가 구현체이다. */}
      <button onClick={handlerChange}>Change Title</button>
    </Card> 
  );
}

export default ExpenseItem;