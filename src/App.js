import React, {useState} from 'react'
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App =() =>{
    const expenses_example = [
        {
            id: "e1",
            title: "Car Insurance",
            amount: 294.67,
            date: new Date(2020, 7, 14),
        },
        {
            id: "e2",
            title: "New TV",
            amount: 799.49,
            date: new Date(2021, 2, 12),
        },
        {
            id: "e3",
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2021, 2, 28),
        },
        {
            id: "e4",
            title: "New Desk",
            amount: 450,
            date: new Date(2021, 11, 29),
        },
    ]
    const [expense, setExpense] = useState(expenses_example)
    const addExpenseHandler =(expense)=>{
        setExpense(prevExpenses=>{
            return [expense, ...prevExpenses];
        })
    }


    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses expense={expense}/>
        </div>
    );
}

export default App;
