import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses(props) {

  console.log(props.item);

  const [filterYear, setFilterYear] = useState('2020');

  const filterChangeHandler = (selectedYear)=>{
    setFilterYear(selectedYear);
  }


  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
      {
        props.item.map((expenses)=>{
         return <ExpenseItem title={expenses.title} amount={expenses.amount} date={expenses.date}/>
        })
      }
      </Card>
    </div>
  );
}

export default Expenses;
