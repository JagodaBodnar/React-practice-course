import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App =() =>{
    const expense = [
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
    const addExpenseHandler =(expense)=>{
        console.log(expense)
    }
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses expense={expense} />
        </div>
    );
}

export default App;
