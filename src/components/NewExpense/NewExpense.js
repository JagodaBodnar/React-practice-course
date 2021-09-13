import React, {useState} from 'react'
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    const displayForm=()=>{
        setShowForm(false)
    }
    return (
        <div className="new-expense">
            {showForm
                ?
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} showForm={displayForm}/>
                :
                <button onClick={() => setShowForm(!showForm)}>Add New Expense</button>}
        </div>
    )
}
export default NewExpense;