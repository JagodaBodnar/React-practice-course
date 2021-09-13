import ExpenseItem from "./ExpenseItem";
import React from "react";
import './ExpensesList.css'

const ExpensesList = props => {

    if (props.filteredExpenses.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }
    return (
        <ul className="expenses-list">
            {props.filteredExpenses.map((element) => {
                return <ExpenseItem item={element} key={element.id}/>
            })}
        </ul>
    )
}
export default ExpensesList;