import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle , setenteredTitle] = useState('');
    const[enteredAmount, setenteredAmount] =useState('');
    const[enteredDate, setenteredDate] =useState('');
    
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = (event) => {
        setenteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
    };

    const amountChangeHandler = (event) => {
        setenteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });
    };

    const dateChangeHandler = (event) => {
        setenteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
    };
    const submitHandler=(event) =>{
        event.preventDefault();
        const expenseData ={
            title :enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };
        console.log(expenseData);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className='new-expense__controls'>
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" onChange={enteredAmount} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2024-12-31" onChange={dateChangeHandler} value={ enteredDate} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
