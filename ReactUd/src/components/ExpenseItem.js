import './ExpenseItem.css'


function ExpenseItem(props) {


    return(
    <div className="expense-item">
    <div>{props.date.toISOString()}</div>
    <div className='expense-item__description'>
        <h2>{props.title}</h2>
    <div className='expense-item__price'>${props.amount}</div>
    </div>
    </div>) // 가로가 없어도 된다. 가독성을 위해서 만든 것이다.
}

export default ExpenseItem;