import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses({item}) {
  console.log(item)

  return (
    <Card className="expenses">
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
  );
}

export default Expenses;
