import React, {useState} from 'react'
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";


const ExpenseItem = (props) => {
    const { amount, date} = props.item
    const [title, setTitle] = useState(props.item.title)
    const clickHandler = () => {
        setTitle("Updated!")
    }

    return (
        <div className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    ${amount}
                </div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    )
}

export default ExpenseItem;