import React, {useState} from 'react'
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import './Expenses.css'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

const filterChangeHandler =(expenses)=>{
    setFilteredYear(expenses)
}
    return (
        <div className="expenses">
            <ExpenseFilter selected={filteredYear} filterChangeHandler={filterChangeHandler}/>
            {props.expense.map((element) => {
                return <ExpenseItem item={element} key={element.id}/>
            })}
        </div>

    )
}

export default Expenses;