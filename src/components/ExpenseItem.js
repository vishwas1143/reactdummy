import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const deleteExpense = () => {
     console.log("button clicked");
    const expenseItem = document.querySelector('.expense-item');
    if (expenseItem) {
      expenseItem.style.display = 'none';
    }
  };

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item_description'>
        <h2>{props.title}</h2>
        <div className='expense-item-price'>${props.amount}</div>
      </div>
      <button onClick={deleteExpense}>Delete Expense</button>
    </div>
  );
}

export default ExpenseItem;
