import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses({ item }) {

  const [filterYear, setFilterYear] = useState('2020');

  const filterChangeHandler = (selectedYear)=>{
    setFilterYear(selectedYear);
  }

  let filterInfoText = '2019, 2020 & 2022';

  if(filterYear === '2019'){
    filterInfoText = '2020, 2021 & 2022'
  } else if(filterYear === '2021'){
    filterInfoText = '2019, 2020 & 2022'
  } else{
    filterInfoText ='2019, 2020 & 2021'
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
        <p>Data for years {filterInfoText} is hidden</p>
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
