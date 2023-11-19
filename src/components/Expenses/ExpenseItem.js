import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  //title and setTitle variables title used to store title and setTitle is a function we can call that when we have to update title
  const[title,setTitle]=useState(props.title);

   
  const deleteExpense = () => {
     setTitle('Updated!');
     console.log(title);
  };

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item_description'>
        <h2>{title}</h2>
        <div className='expense-item-price'>${props.amount}</div>
      </div>
      <button onClick={deleteExpense}>Delete Expense</button>
    </div>
  );
}

export default ExpenseItem;
