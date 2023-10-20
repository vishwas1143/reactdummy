import { useState } from 'react';
import './ExpenseForm.css';


const ExpenseForm = () => {
    const [enteredTitle , setenteredTitle] = useState('');
    const[enteredAmount, setenteredAmount] =useState('');
    const[enteredDate, setenteredDate] =useState('');

    const titleChangeHandler = (event) => {
        setenteredTitle(event.target.value)
    };

    const amountChangeHandler =(event) =>{
        setenteredAmount(event.target.value);
    };

    const dateChangeHandler =(event) => {
        setenteredDate(event.target.value);
    };
    return (
        <form>
            <div className="new-expense_controls">
                <div>
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div>
                    <label>Amount</label>
                    <input type="number" onChange={amountChangeHandler}  />
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2024-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense_actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
