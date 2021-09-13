import React, {useState} from 'react'
import ExpenseFilter from "./ExpensesFilter";
import './Expenses.css'
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (expenses) => {
        setFilteredYear(expenses)
    }
    const filteredExpenses = props.expense.filter(expense => `${expense.date.getFullYear()}` === filteredYear)

    return (
        <div className="expenses">
            <ExpenseFilter selected={filteredYear} filterChangeHandler={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList filteredExpenses={filteredExpenses}  />
        </div>
    )
}

export default Expenses;