import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

const Expenses=(props)=> {
    return (
        <div className="expenses">{props.expense.map((element) => {
            return <ExpenseItem item={element} key={element.id}/>
        })}</div>
    )
}

export default Expenses;