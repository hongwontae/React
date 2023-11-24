import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses({ item }) {

  const [filterYear, setFilterYear] = useState('2020');

  const filterChangeHandler = (selectedYear)=>{
    console.log('This is Expenses.js');
    console.log(selectedYear)
    setFilterYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
        <ExpenseItem
          title={item[0].title}
          amount={item[0].amount}
          date={item[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={item[1].title}
          amount={item[1].amount}
          date={item[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={item[2].title}
          amount={item[2].amount}
          date={item[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={item[3].title}
          amount={item[3].amount}
          date={item[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
